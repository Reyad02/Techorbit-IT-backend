import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validate = (schema:ZodObject) => (req:Request, res:Response, next:NextFunction) => {
  try {
    schema.parse(req.body);  
    next();
  } catch (err) {
    next(err)
  }
};
