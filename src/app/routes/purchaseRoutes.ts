import { Router } from "express";
import { validate } from "../middlewares/validateMiddleware";
import authentication from "../middlewares/userAuthenticationMiddleware";
import { purchaseControllers } from "../controllers/purchaseController";
import { purchaseValidation } from "../validators/purchaseValidation";

const purchaseRoutes = Router();

purchaseRoutes.post(
  "/",
  authentication("user"),
  validate(purchaseValidation),
  purchaseControllers.purchaseCourse
);

purchaseRoutes.get(
  "/",
  authentication("user"),
  purchaseControllers.userPurchasedCourse
);

export default purchaseRoutes;
