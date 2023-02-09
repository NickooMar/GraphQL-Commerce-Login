import mongoose from "mongoose";

import { MONGODB_URI } from "./config.js";

mongoose.set("strictQuery", false);

export const connectDB = async () => {
  try {
    await mongoose
      .connect(MONGODB_URI)
      .then(() => console.log("MongoDB Connected"));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
