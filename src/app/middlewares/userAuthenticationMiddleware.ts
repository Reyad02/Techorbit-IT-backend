import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/verifyToken";
import user from "../models/User";
import { CustomError } from "../error/CustomError";

const authentication = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new CustomError("Access denied. No token provided.", 401);
      }
      const decodedToken = verifyToken(token);
      if (!decodedToken) {
        throw new CustomError("Invalid or expired token.", 401);
      }
      const { email, role } = decodedToken;

      const existUser = user.findOne({ email: email });
      if (!existUser) {
        throw new CustomError("User account no longer exists.", 401);
      }

      if (!roles.includes(role)) {
        throw new CustomError("Access denied. Insufficient permissions.", 403);
      }

      req.user = decodedToken as JwtPayload;
      next();
    } catch (err: any) {
      res.status(err.statusCode || 500).json({
        message: err.message || "Failed to get verify user",
        success: false,
        stack: err?.stack,
      });
    }
  };
};

export default authentication;
