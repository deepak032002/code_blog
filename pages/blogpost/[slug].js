import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from '../../styles/BlogPage.module.scss'

export const getServerSideProps = async (context) => {

  const { slug } = context.query

  const res = await axios.get(`http://localhost:3000/api/getBlogBySlug/?slug=${slug}`)
  return {
    props: {
      blog: res.data.blog
    }
  }
}

const Slug = (props) => {
  return (
    <>
      <div className='blog_header w-[50%] text-center'>
          <div className="author">
            <Image src="" alt="author_image" layout='responsive' objectFit='cover'/>
          </div>
      </div>
      <div className={`${styles.blog} w-[50%] mx-auto`} dangerouslySetInnerHTML={{ __html: props?.blog.content }} >

      </div>
    </>
  )
}

export default Slug