import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface QuillEditorProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  initialValue = "",
  onChange,
}) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleEditorChange = (content: string) => {
    setValue(content);
    onChange(content);
  };

  return (
    <ReactQuill theme="snow" value={value} onChange={handleEditorChange} />
  );
};

export default QuillEditor;
