import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./app/routes/userRoute";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hi, your project is working!!!");
});

app.use("/api/user", userRoutes)

export default app;
