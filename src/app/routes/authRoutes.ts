import { Router } from "express";
import { validate } from "../middlewares/validateMiddleware";
import { authValidation } from "../validators/authValidation";
import { authControllers } from "../controllers/authController";

const authRoutes = Router();

authRoutes.post("/login", validate(authValidation), authControllers.loginUser);
authRoutes.post("/refresh-token", authControllers.refreshToken);

export default authRoutes;
