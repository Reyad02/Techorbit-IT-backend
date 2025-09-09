import { z } from "zod";

export const authValidation = z.object({
  email: z.email({
    error: (iss) =>
      iss.input === undefined ? "Email is required" : "Invalid email",
  }),
  password: z
    .string({
      error: (iss) =>
        iss.input === undefined ? "Email is required" : "Invalid email",
    }),
});
