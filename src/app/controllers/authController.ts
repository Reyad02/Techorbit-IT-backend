import { NextFunction, Request, Response } from "express";
import user from "../models/User";
import bcrypt from "bcrypt";
import { createToken } from "../utils/createToken";
import { CustomError } from "../error/CustomError";

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loginInfo = req?.body;
    const isUserExist = await user.findOne({ email: loginInfo?.email });
    if (!isUserExist) {
      throw new CustomError("User doesn't exist.",404);
    }

    const isPassMatch = await bcrypt.compare(
      loginInfo.password,
      isUserExist.password
    );

    if (!isPassMatch) {
      throw new CustomError("Password doesn't match",401);
    }

    const token = createToken(isUserExist);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: token,
    });
  } catch (err: any) {
    next(err);
  }
};

export const authControllers = {
  loginUser,
};
