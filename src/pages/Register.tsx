import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import LoginUser from '../services/LoginUser';
import Cookies from "js-cookie";

import styles from "../styles/Auth.module.css";
import back from "../assets/back.svg"

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUserContext();

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        LoginUser(email, password)
            .then(token => {
                Cookies.set("token", token);
                setUser({ username: "jaume", email })
            })
            .catch(error => console.error(error))
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link to="/">
                    <img src={back} alt="back" />
                </Link>
                <h1 >Register</h1>
                <form onSubmit={handleLogin}>
                    <div className={styles.controller}>
                        <input type="email" placeholder='Email' value={email} onChange={handleEmail} />
                    </div>
                    <div className={styles.controller}>
                        <input type="password" placeholder='Password' value={password} onChange={handlePassword} />
                    </div>
                    <div className={styles.controller}>
                        <button type='submit'>Register</button>
                    </div>
                </form>
                <p >You already have an account? <Link to="/auth/register">Register</Link></p>
            </div>
        </div>
    );
}

export default Register;