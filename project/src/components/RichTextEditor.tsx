import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ bold: true }, { italic: true }, { underline: true }], // Text formatting
    [{ header: [1, 2, 3, false] }], // Headers
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    ["link", "image"], // Insert links/images
    ["clean"], // Remove formatting
  ],
};

const formats = [
  "bold",
  "italic",
  "underline",
  "header",
  "list",
  "bullet",
  "link",
  "image",
];

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState("");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Rich Text Editor</h2>

      {/* ReactQuill Editor with Custom Toolbar */}
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        className="border border-gray-400 rounded-md bg-white min-h-[200px] text-black"
      />
    </div>
  );
};

export default RichTextEditor;



