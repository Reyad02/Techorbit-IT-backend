import { NextFunction, Request, Response } from "express";
import user from "../models/User";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userInfo = req?.body;
    const isUserExist = await user.findOne({ email: userInfo?.email });
    if (isUserExist) {
      throw new Error("User with this email already exists.");
    }
    const result = await user.create(userInfo);
    res.status(201).json({
      success: true,
      message: "User registered in successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const userControllers = {
  registerUser,
};
