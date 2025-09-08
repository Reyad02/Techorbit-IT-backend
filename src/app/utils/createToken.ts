import config from "../config";
import jwt, { SignOptions } from "jsonwebtoken";
import { IUser } from "../types";

export const createToken = (userInfo: Partial<IUser>) => {
  return jwt.sign(
    { email: userInfo.email },
    config.jwt_secret as string,
    { expiresIn: config.jwt_expiration } as SignOptions
  );
};
