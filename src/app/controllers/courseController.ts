import { NextFunction, Request, Response } from "express";
import course from "../models/Course";

const createCourse= async (
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

export const courseControllers = {
  createCourse,
};
