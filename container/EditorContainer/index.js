import React, { useState, useEffect } from "react";
import TextEditor from "../../components/TextEditor";

const EditorContainer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <>
      <TextEditor />
    </>
  );
};

export default EditorContainer;
