import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./app/routes/userRoute";
import authRoutes from "./app/routes/authRoutes";
import courseRoutes from "./app/routes/courseRoutes";
import purchaseRoutes from "./app/routes/purchaseRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hi, your project is working!!!");
});

app.use("/api/user", userRoutes);
app.use("/api/user", authRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/purchase", purchaseRoutes);

export default app;
