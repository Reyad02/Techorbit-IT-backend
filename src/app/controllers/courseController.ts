import { NextFunction, Request, Response } from "express";
import course from "../models/Course";

const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const courseInfo = req?.body;
    const result = await course.create(courseInfo);
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const getAllCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await course.find();
    res.status(200).json({
      success: true,
      message: "All course retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const getSingleCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const isCourseExist = await course.findOne({ _id:id });
    if (!isCourseExist) {
      throw new Error("Course doesn't exist.");
    }
    res.status(200).json({
      success: true,
      message: "Course retrieved successfully",
      data: isCourseExist,
    });
  } catch (err: any) {
    next(err);
  }
};

const deleteCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isCourseDeleted = await course.findByIdAndDelete(req.params.id);
    if (!isCourseDeleted) {
      throw new Error("Course doesn't exist.");
    }
    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      data: {},
    });
  } catch (err: any) {
    next(err);
  }
};

export const courseControllers = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  deleteCourse
};
