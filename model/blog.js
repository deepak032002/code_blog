import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    metadesc: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,

    },
    author_image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
