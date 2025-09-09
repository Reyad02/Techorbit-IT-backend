import config from "../config";
import jwt, { SignOptions } from "jsonwebtoken";
import { IUser } from "../types";

export const createAccessToken = (userInfo: Partial<IUser>) => {
  return jwt.sign(
    { email: userInfo.email, role: userInfo.role },
    config.jwt_secret as string,
    { expiresIn: config.jwt_access_token_expiration } as SignOptions
  );
};

export const createRefreshToken = (userInfo: Partial<IUser>) => {
  return jwt.sign(
    { email: userInfo.email, role: userInfo.role },
    config.jwt_secret as string,
    { expiresIn: config.jwt_refresh_token_expiration } as SignOptions
  );
};
