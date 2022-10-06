import TextEditor from "../components/TextEditor/TextEditor";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";

const Editor = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <>
      <Head>
        <title>DCode - Editor</title>
      </Head>
      <div className={` mx-4 editor`}>
        <TextEditor />
      </div>
    </>
  );
};

export default Editor;
