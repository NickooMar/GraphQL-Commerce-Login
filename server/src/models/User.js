import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  //   refreshToken: {type: String}
});

export default model("User", userSchema);
