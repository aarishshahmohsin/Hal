import { Schema, model } from "mongoose";

interface IPost {
  title: string;
  content: string;
  date: Date;
  avatar?: string;
}

const postSchema = new Schema<IPost>({
  title: { required: true, type: String },
  content: { required: true, type: String },
  date: { default: Date.now(), required: true, type: Date },
  avatar: String,
});

const Post = model<IPost>('Post', postSchema);

export default Post;