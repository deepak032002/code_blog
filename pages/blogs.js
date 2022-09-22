import React from 'react'
import BlogCard from '../components/BlogCard/BlogCard'
import axios from 'axios'

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/getBlogs/')

  // console.log(res.data.blogs);
  return {
    props: {
      blogs: res.data.blogs || []
    }
  }
}

const Blogs = (props) => {
  return (
    <div id="Blogs" className='blogs_wrapper text-[1rem]'>
      <div className="filter"></div>
      <div className="blogs gap-4 grid grid-cols-12 container mx-auto place-items-center px-2">
        {
          props?.blogs.map((blog, index) => {
            return <BlogCard blog={blog} key={new Date().getTime() + index} />
          })
        }
      </div>
    </div>
  )
}

export default Blogs

