import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
moment.locale('en')

const BlogCard = ({ blog }) => {
    return (
        <>
            <div className="blog_card col-span-3 border">
                <div className="image relative w-full h-[12.5rem]">
                    <Image src={blog.image} alt="blogImage" layout='fill' objectFit='cover' />
                </div>
                <div className="desc p-2">
                    <div className="tags flex gap-2">
                        {
                            blog.tags.map((tag, index) => {
                                return <p key={new Date().getTime() + index} className='text-xxl bg-violet-900 text-white px-2 py-1 rounded mt-2'>{tag}</p>
                            })
                        }
                    </div>
                    <Link href={`/blogpost/${blog.slug}`}>
                        <a>
                            <h1 className='my-4 capitalize hover:text-blue-500'>{blog.metadesc.slice(0, 65)}</h1>
                        </a>
                    </Link>
                    <div className="wrapper flex w-full gap-8 text-xs text-gray-400">
                        <p><FontAwesomeIcon icon={faUser} /> {blog.author}</p>
                        <p><FontAwesomeIcon icon={faCalendarDays} /> {moment(blog.createdAt).format('ll')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard