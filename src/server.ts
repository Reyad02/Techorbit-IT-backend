import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL as string);
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (err: any) {
    console.log(err);
  }
};

main();
