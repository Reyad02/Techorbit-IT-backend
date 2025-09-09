import { z } from "zod";

export const purchaseValidation = z.object({
  courseId: z.string({
    error: (iss) =>
      iss.input === undefined ? "Course Id is required" : "Invalid course Id",
  }),
  amount: z
    .number({
      error: (iss) =>
        iss.input === undefined ? "Amount is required" : "Amount price",
    })
    .positive("Price must be greater than 0"),
});
