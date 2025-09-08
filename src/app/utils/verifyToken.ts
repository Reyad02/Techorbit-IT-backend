import config from "../config";
import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyToken = (token: string) => {
  return jwt.verify(token, config.jwt_secret as string) as JwtPayload;
};