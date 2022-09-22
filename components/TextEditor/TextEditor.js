import React, { useRef, useState, useEffect } from "react";

const TextEditor = () => {
  const editorRef = useRef();
  const [data, setData] = useState("");
  const [isLoadedEditor, setIsLoadedEditor] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("../../src/ckeditor"),
    };
    setIsLoadedEditor(true);
  }, []);

  return (
    <>
      {isLoadedEditor && (
        <div>
          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              setData(editor.getData());
              console.log({ event, editor });
            }}
            config = {{
              simpleUpload: {
              uploadUrl: 'http://localhost:3000/api/uploadImg'
              }
            }}
          />
        </div>
      )}

    </>
  );
};

export default TextEditor;
