import { model, Schema } from "mongoose";
import { IPurchase } from "../types";

const purchaseSchema = new Schema<IPurchase>(
  {
    userId: { type: Schema.Types.ObjectId, ref:"user", required: true },
    courseId: { type: Schema.Types.ObjectId, ref:"course", required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const purchase = model("purchase", purchaseSchema);
export default purchase;
