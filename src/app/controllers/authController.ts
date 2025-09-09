import { NextFunction, Request, Response } from "express";
import user from "../models/User";
import bcrypt from "bcrypt";
import { createAccessToken, createRefreshToken } from "../utils/createToken";
import { CustomError } from "../error/CustomError";
import config from "../config";
import { verifyToken } from "../utils/verifyToken";

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loginInfo = req?.body;
    const isUserExist = await user.findOne({ email: loginInfo?.email });
    if (!isUserExist) {
      throw new CustomError("User doesn't exist.", 404);
    }

    const isPassMatch = await bcrypt.compare(
      loginInfo.password,
      isUserExist.password
    );

    if (!isPassMatch) {
      throw new CustomError("Password doesn't match", 401);
    }

    const accessToken = createAccessToken(isUserExist);
    const refreshToken = createRefreshToken(isUserExist);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.node_env === "production",
      sameSite: "strict",
      maxAge: 10 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: { accessToken, refreshToken },
    });
  } catch (err: any) {
    next(err);
  }
};

const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      throw new CustomError("Refresh token required", 401);
    }

    const decoded = verifyToken(refreshToken) as any;

    const isUser = await user.findOne({ email: decoded?.email });
    if (!isUser) {
      throw new CustomError("Invalid refresh token", 403);
    }

    const newAccessToken = createAccessToken(isUser);

    res.status(200).json({
      success: true,
      message: "Access token refreshed",
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error: any) {
    next(new CustomError("Invalid refresh token", 403));
  }
};

export const authControllers = {
  loginUser,
  refreshToken,
};
