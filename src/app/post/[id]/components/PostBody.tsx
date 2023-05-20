"use client";

// React and Next.
import { useRef } from "react";

// External packages.
import axios from "axios";
import { Editor, EditorContent } from "@tiptap/react";
import { BsRocketTakeoffFill } from "react-icons/bs";

// Components.
import EditorMenuBar from "./EditorMenuBar";

interface PostBodyProps {
  contentError: string;
  editor: Editor | null;
  isEditable: boolean;
  setContent: (content: string) => void;
  title: string;
}

const PostBody: React.FC<PostBodyProps> = ({
  editor,
  isEditable,
  contentError,
  setContent,
  title,
}) => {
  const roleRef = useRef<HTMLInputElement>(null);

  if (!editor) return null;

  const postAiContent = async () => {
    editor
      .chain()
      .focus()
      .setContent("AI is generating content for you. Please wait...")
      .run();

    const { data } = await axios.post("/api/openai", {
      title,
      role: roleRef.current?.value,
    });

    editor.chain().focus().setContent(data.content);
    console.log(data);
  };

  return (
    <article className="leading-8 text-wh-500">
      {/* AI Generator. */}
      {/* {isEditable && (
        <div className="mb-3 rounded-md border-2 bg-wh-50 p-3">
          <h4 className="m-0 p-0">Generate AI Content</h4>
          <p className="my-1 p-0 text-xs">What type of writer do you want?</p>
          <div className="flex justify-between gap-5">
            <input
              ref={roleRef}
              defaultValue="I am a helpful assistant."
              placeholder="Role"
              className="w-full rounded-md border-2 bg-wh-50 px-3 py-1"
            />
            <button type="button" onClick={postAiContent}>
              <BsRocketTakeoffFill
                size={24}
                className="text-accent-orange transition duration-500 hover:text-wh-300"
              />
            </button>
          </div>
        </div>
      )} */}
      <div
        className={
          isEditable ? "rounded-md border-2 bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mb-5 mt-2" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {!!contentError && <p className="mt-1 text-wh-900">{contentError}</p>}
    </article>
  );
};

export default PostBody;
