import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/verifyToken";
import user from "../models/User";

const authentication = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error("You are not an authenticate user");
      }
      const decodedToken = verifyToken(token);
      if (!decodedToken) {
        throw new Error("You are not an authenticate user");
      }
      const { email, role } = decodedToken;

      const existUser = user.findOne({ email: email });
      if (!existUser) {
        throw new Error("You are not an authorized user");
      }

      if (!roles.includes(role)) {
        throw new Error("You are not an authorized user");
      }

    //   req.user = decodedToken as JwtPayload;
      next();
    } catch (err: any) {
      res.status(err.statusCode || 500).json({
        message: err.message || "Failed to get verify user",
        success: false,
        error: err,
        stack: err?.stack,
      });
    }
  };
};

export default authentication;
