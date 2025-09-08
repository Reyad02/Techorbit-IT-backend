import { model, Schema } from "mongoose";
import { IUser } from "../types";
import bcrypt from "bcrypt";
import config from "../config";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    this.password = await bcrypt.hash(this.password, Number(config.saltRounds));
    next();
  } catch (err: any) {
    next(err);
  }
});

const user = model("user", userSchema);
export default user;
