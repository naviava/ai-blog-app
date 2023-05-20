// External packages.
import { Editor, EditorContent } from "@tiptap/react";

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
  if (!editor) return null;

  return (
    <article className="leading-8 text-wh-500">
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
