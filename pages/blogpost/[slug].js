import React from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../../styles/BlogPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Prism from "prismjs";
import moment from "moment/moment";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/api/blog/getBlogBySlug/?slug=${slug}`
  );
  return {
    props: {
      blog: res.data.blog,
    },
  };
};

const Slug = (p) => {
  const [props, setProps] = useState();

  useEffect(() => {
    setProps(p);
    Prism.highlightAll();
  }, [p, props]);

  if(!props) return <>Loading...</>

  return (
    <>
      <Head>
        <title>{props.blog.title}</title>
      </Head>
      <div className="blog">
        <div className="blog_header w-[50%] mx-auto">
          <div className="author overflow-hidden flex items-center flex-col justify-center">
            <Image
              src={props?.blog.author_image}
              alt="author_image"
              width={100}
              className="rounded-full w-24 h-24"
              height={100}
            />
            <span className="text-base text-[#333]">{props?.blog.author}</span>
          </div>

          <div className="info flex justify-between items-center mt-6 mb-1">
            <div className="timestamp text-xs">
              <p>Published At: {moment(props.blog.createdAt).format("ll")}</p>
            </div>

            <div className="share text-sm flex gap-4 text-[#333]">
              <FontAwesomeIcon className="cursor-pointer" icon={faFacebook} />
              <FontAwesomeIcon className="cursor-pointer" icon={faInstagram} />
              <FontAwesomeIcon className="cursor-pointer" icon={faTwitter} />
              <Link href={`/editor?type=existing&id=${props?.blog._id}`}>
                <a>
                  <FontAwesomeIcon className="cursor-pointer" icon={faEdit} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-[50%] mx-auto mb-6" />

        <div
          className={`${styles.blog} w-[50%] mx-auto`}
          dangerouslySetInnerHTML={{ __html: props?.blog.content }}
        ></div>

        <hr className="w-[50%] mx-auto mt-6 mb-1" />

        <div className="blog_footer mx-auto w-[50%]">
          <div className="author overflow-hidden flex items-center justify-between">
            <div className="flex items-center gap-2 justify-start">
              <Image
                src={props?.blog.author_image}
                alt="author_image"
                width={50}
                className="rounded-full"
                height={50}
              />
              <span className="text-sm text-[#333]">{props?.blog.author}</span>
            </div>

            <div className="share text-sm flex gap-4 text-[#333]">
              <FontAwesomeIcon className="cursor-pointer" icon={faFacebook} />
              <FontAwesomeIcon className="cursor-pointer" icon={faInstagram} />
              <FontAwesomeIcon className="cursor-pointer" icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slug;
