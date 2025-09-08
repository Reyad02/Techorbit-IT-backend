import { Router } from "express";
import { userControllers } from "../controllers/registerUserController";

const userRoutes = Router();

userRoutes.post("/register", userControllers.registerUser);

export default userRoutes;
