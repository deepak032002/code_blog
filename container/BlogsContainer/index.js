import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../../components/BlogCard";

const BlogsContainer = () => {
  const [blogs, setblogs] = useState([]);
  const [isLoadedBlog, setIsLoadedBlog] = useState(false);

  const getBlogs = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/api/blog/getBlogs/`
    );

    if (res) setIsLoadedBlog(true);
    setblogs(res.data.blogs);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (!isLoadedBlog)
    return (
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 text-center"> Loading... </div>
      </div>
    );

  return (
    <div className="blogs gap-4 grid grid-cols-12 container mx-auto place-items-center px-2">
      {blogs.map((blog, index) => {
        return <BlogCard blog={blog} key={new Date().getTime() + index} />;
      })}
    </div>
  );
};

export default BlogsContainer;
