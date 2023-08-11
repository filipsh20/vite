import express from "express";
import cookieParser from "cookie-parser";
import cors from "./middlewars/cors";
import jwt from "jsonwebtoken";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors);

app.post("/login", async (req, res) => {
  const username = "jaume"
  const { email } = req.body
  const token = jwt.sign({ username, email }, "123", { expiresIn: "2h" });
  res.status(200).json(token);
});

app.delete('/logout', (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/check-token", async (req, res) => {
  const token = req.body.token;
  if (token) {
    const verify = jwt.verify(token, "123");
    console.log(verify)
    return res.status(200).json(verify);
  }
  return res.status(401).send()
});

app.listen(5000, () => console.log("Server running"));
