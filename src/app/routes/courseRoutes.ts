import { Router } from "express";
import { validate } from "../middlewares/validateMiddleware";
import { courseValidation } from "../validators/courseValidation";
import { courseControllers } from "../controllers/courseController";

const courseRoutes = Router();

courseRoutes.post(
  "/create-course",
  validate(courseValidation),
  courseControllers.createCourse
);

export default courseRoutes;
