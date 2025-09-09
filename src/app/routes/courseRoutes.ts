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

courseRoutes.get("/:id", courseControllers.getSingleCourse);
courseRoutes.get("/", courseControllers.getAllCourse);

export default courseRoutes;
