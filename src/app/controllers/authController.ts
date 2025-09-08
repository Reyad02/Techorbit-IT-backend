import { NextFunction, Request, Response } from "express";
import user from "../models/User";
import bcrypt from "bcrypt";
import { createToken } from "../utils/createToken";

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loginInfo = req?.body;
    const isUserExist = await user.findOne({ email: loginInfo?.email });
    if (!isUserExist) {
      throw new Error("User doesn't exist.");
    }

    const isPassMatch = await bcrypt.compare(
      loginInfo.password,
      isUserExist.password
    );

    if (!isPassMatch) {
      throw new Error("Password doesn't match");
    }

    const token = createToken(isUserExist);

    res.status(201).json({
      success: true,
      message: "User registered in successfully",
      data: token,
    });
  } catch (err: any) {
    next(err);
  }
};

export const authControllers = {
  loginUser,
};
