import { Router } from "express";
import { validate } from "../middlewares/validateMiddleware";
import { courseValidation } from "../validators/courseValidation";
import { courseControllers } from "../controllers/courseController";
import authentication from "../middlewares/userAuthenticationMiddleware";

const courseRoutes = Router();

courseRoutes.post(
  "/create-course",
  authentication("admin"),
  validate(courseValidation),
  courseControllers.createCourse
);

courseRoutes.delete(
  "/:id",
  authentication("admin"),
  courseControllers.deleteCourse
);
courseRoutes.get(
  "/:id",
  authentication("user"),
  courseControllers.getSingleCourse
);
courseRoutes.get("/", authentication("user"), courseControllers.getAllCourse);

export default courseRoutes;
