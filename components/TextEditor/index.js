import React, { useRef, useState, useLayoutEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Input, Textarea, Button } from "@material-tailwind/react";
import { useAlert } from "react-alert";
import { useEffect } from "react";

const TextEditor = () => {
  const editorRef = useRef();
  const alert = useAlert();

  const [data, setData] = useState({
    metadesc: "",
    tags: "",
    slug: "",
  });
  const [html, setHtml] = useState("");

  const [isLoadedEditor, setIsLoadedEditor] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  const router = useRouter();
  const { type, id } = router.query;

  useEffect(() => {
    if (type === "existing") {
      const getData = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_HOST}/api/blog/getBlogById?id=${id}`
        );
        setData({
          metadesc: res.data.blog.metadesc,
          tags: res.data.blog.tags,
          slug: res.data.blog.slug,
        });

        setHtml(res.data.blog.content);
      };
      getData();
    }
  }, [type, id]);

  useLayoutEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("../../src/ckeditor"),
    };
    setIsLoadedEditor(true);

    return () => {
      editorRef.current = {};
    };
  }, []);

  const findInHtml = (html, str, end) => {
    let content = "";
    if (html) {
      const index = html.indexOf(str);
      let i = index + str.length;
      while (html[i] !== end) {
        content += html[i];
        i++;
      }
      return content;
    }

    return "";
  };

  const handleBlogSave = async () => {
    try {
      if (data.metadesc && data.slug && data.tags && html) {
        const res = await axios.post("http://localhost:3000/api/blog/addBlog", {
          title: findInHtml(html, "<h1>", "<"),
          image: findInHtml(html, 'src="', '"'),
          slug: data.slug,
          tags: data.tags,
          metadesc: data.metadesc,
          content: html,
        });

        if (res.data.success) {
          alert.success("Blog Saved Successfully!");
        } else {
          alert.error("Some Problem Occured!");
        }
      }
    } catch (error) {
      alert.error(error.response.data.msg.message);
    }
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleBlogUpdate = async () => {
    try {
      if (data.metadesc && data.slug && data.tags && html) {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_HOST}/api/blog/updateBlog`,
          {
            title: findInHtml(html, "<h1>", "<"),
            image: findInHtml(html, 'src="', '"'),
            slug: data.slug,
            tags: data.tags,
            metadesc: data.metadesc,
            content: html,
          },
          {
            headers: {
              blog_id: id,
            },
          }
        );

        if (res.data.success) {
          alert.success("Blog Update Successfully!");
        }
      } else {
        alert.error("Fill all the field Please!");
      }
    } catch (error) {
      alert.error(error.response.data.msg.message);
    }
  };

  if (!isLoadedEditor)
    return (
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 text-center"> Loading... </div>
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        <div className="h-[36rem] md:col-span-9 col-span-12">
          <CKEditor
            editor={ClassicEditor}
            data={html}
            onChange={(event, editor) => {
              setHtml(editor.getData());
            }}
            config={{
              simpleUpload: {
                uploadUrl: `${process.env.NEXT_PUBLIC_HOST}/api/uploadImg`,
              },
            }}
          />
        </div>
        <div className="md:col-span-3 col-span-12 p-1">
          <div className="flex flex-col gap-4">
            <Input
              variant="standard"
              color="blue"
              label="Endpoint"
              name="slug"
              value={data?.slug}
              onChange={handleInput}
            />
            <Input
              variant="standard"
              color="blue"
              label="Tags"
              value={data?.tags}
              name="tags"
              onChange={handleInput}
            />

            <Textarea
              name="metadesc"
              value={data?.metadesc}
              onChange={handleInput}
              variant="standard"
              className="focus:border-0"
              label="Meta Description"
            />
            {type === "existing" ? (
              <Button onClick={handleBlogUpdate}>Update Blog</Button>
            ) : (
              <Button onClick={handleBlogSave}>Save Blog</Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
