import { Schema, model } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  posts: string[];
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  posts: {type: [String], required: false, default: []},
});

const User = model<IUser>('User', userSchema);

export default User;