import TextEditor from "../components/TextEditor/TextEditor";
import Head from "next/head";

const Editor = () => {
  return (
    <>
      <Head></Head>
      <div className={`w-[50rem] mx-auto editor`}>
        <TextEditor/>
      </div>
    </>
  );
};

export default Editor;
