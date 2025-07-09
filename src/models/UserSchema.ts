import mongoose, { Schema } from "mongoose";

interface User {
  name: string;
  email: string;
  message: string;
}

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel =
  mongoose.models.User || mongoose.model<User>("User", userSchema);

export default UserModel;
