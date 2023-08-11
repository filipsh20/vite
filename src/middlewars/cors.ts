import { Request, Response, NextFunction } from "express";

export default function cors(req: Request, res: Response, next: NextFunction) {
  const allowedOrigins = ["http://localhost:5173"];
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  } else {
    res.status(403).json({ error: "Access denied" });
  }
}