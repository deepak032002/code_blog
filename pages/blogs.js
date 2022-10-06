import React from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Head from "next/head";

const Blogs = () => {
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

  if (!isLoadedBlog) return <>Loading...</>;

  return (
    <>
      <Head>
        <title>DCode - Blogs</title>
      </Head>
      <div id="Blogs" className="blogs_wrapper text-[1rem]">
        <div className="filter"></div>
        <div className="blogs gap-4 grid grid-cols-12 container mx-auto place-items-center px-2">
          {blogs.map((blog, index) => {
            return <BlogCard blog={blog} key={new Date().getTime() + index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
