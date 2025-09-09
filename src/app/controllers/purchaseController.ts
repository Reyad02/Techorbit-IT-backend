import { NextFunction, Request, Response } from "express";
import course from "../models/Course";
import user from "../models/User";
import purchase from "../models/Purchase";
import { CustomError } from "../error/CustomError";

const purchaseCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const purchaseInfo = req?.body;
    const purchaseUser = await user.findOne({ email: req.user?.email });
    purchaseInfo.userId = purchaseUser?._id;

    const isCourseExist = await course.findById(purchaseInfo?.courseId);
    if (!isCourseExist) {
      throw new CustomError("Course doesn't exist.",401);
    }

    // const existingPurchase = await purchase.findOne({
    //   userId: purchaseInfo?.userId,
    //   courseId: purchaseInfo?.courseId,
    // });

    // if (existingPurchase) {
    //   throw new Error("You already purchased this course.");
    // }

    const result = await purchase.create(purchaseInfo);
    res.status(201).json({
      success: true,
      message: "Course purchased successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const userPurchasedCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const purchaseUser = await user.findOne({ email: req.user?.email });
    const userId = purchaseUser?._id;

    const result = await purchase.find({userId}).populate('userId').populate('courseId');
    res.status(200).json({
      success: true,
      message: "Your purchased course retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const purchaseControllers = {
  purchaseCourse,
  userPurchasedCourse,
};
