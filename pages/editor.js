import TextEditor from "../components/TextEditor";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import EditorContainer from "../container/EditorContainer";

const Editor = () => {
  return (
    <>
      <div className={` mx-4 editor`}>
        <EditorContainer />
      </div>
    </>
  );
};

export default Editor;
