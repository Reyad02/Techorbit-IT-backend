import { model, Schema } from "mongoose";
import { ICourse } from "../types";

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    instructor: { type: String, required: true },
  },
  { timestamps: true }
);

const course = model("course", courseSchema);
export default course;
