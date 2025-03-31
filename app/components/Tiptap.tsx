"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable an included extension
        history: false,

        // Configure an included extension
        heading: {
          levels: [1, 2],
        },
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
