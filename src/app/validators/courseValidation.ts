import { z } from "zod";

export const courseValidation = z.object({
  title: z.string({
    error: (iss) =>
      iss.input === undefined ? "Title is required" : "Invalid title",
  }),
  description: z.string({
    error: (iss) =>
      iss.input === undefined
        ? "Description is required"
        : "Invalid description",
  }),
  price: z
    .number({
      error: (iss) =>
        iss.input === undefined ? "Price is required" : "Invalid price",
    })
    .positive("Price must be greater than 0"),
  instructor: z.string({
    error: (iss) =>
      iss.input === undefined ? "Instructor is required" : "Invalid instructor",
  }),
});
