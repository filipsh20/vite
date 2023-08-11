import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUserContext } from './context/UserContext';
import CheckToken from "./services/CheckToken";

import Main from "./pages/Main";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./App.css";

function App() {
  const { user, setUser } = useUserContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CheckToken()
      .then(data => setUser(data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [setUser]);

  if (loading) return <div></div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={user !== null ? <Navigate to="/home" /> : <Navigate to="/" />} />
        <Route path="/" element={user !== null ? <Navigate to="/home" /> : <Main />} />
        <Route path="/home" element={user !== null ? <Home /> : <Navigate to="/" />} />
        <Route path="/auth/register" element={user !== null ? <Navigate to="/home" /> : <Register />} />
        <Route path="/auth/login" element={user !== null ? <Navigate to="/home" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
