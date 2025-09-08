import { Router } from "express";
import { userControllers } from "../controllers/registerUserController";
import { validate } from "../middlewares/validateMiddleware";
import { userValidation } from "../validators/userValidation";

const userRoutes = Router();

userRoutes.post(
  "/register",
  validate(userValidation),
  userControllers.registerUser
);

export default userRoutes;
