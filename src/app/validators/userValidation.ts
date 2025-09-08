import { z } from "zod";

export const userValidation = z.object({
  email: z.email({
    error: (iss) =>
      iss.input === undefined ? "Email is required" : "Invalid email",
  }),
  name: z.string({
    error: (iss) =>
      iss.input === undefined ? "Email is required" : "Invalid email",
  }),
  password: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Email is required" : "Invalid email",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
  role: z.enum(["user", "admin"]).default("user"),
});
