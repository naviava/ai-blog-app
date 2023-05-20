// External packages.
import { Editor } from "@tiptap/react";
import { FcCancel } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";

// Types.
import { useCallback } from "react";

interface PostHeaderProps {
  category: string;
  editor: Editor | null;
  isEditable: boolean;
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent: string;
  setTempContent: (tempContent: string) => void;
  handleIsEditable: (bool: boolean) => void;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  category,
  isEditable,
  handleIsEditable,
  editor,
  setTempContent,
  setTempTitle,
  setTitle,
  tempContent,
  tempTitle,
  title,
}) => {
  const handleEnableEdit = useCallback(() => {
    handleIsEditable(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || "");
  }, [
    editor,
    handleIsEditable,
    isEditable,
    setTempContent,
    setTempTitle,
    title,
  ]);

  const handleCancelEdit = useCallback(() => {
    handleIsEditable(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  }, [
    editor?.commands,
    handleIsEditable,
    isEditable,
    tempContent,
    tempTitle,
    setTitle,
  ]);

  return (
    <>
      {/* Breadcrumbs. */}
      <h5 className="text-wh-300">{`Home  >  ${category}  >  ${title}`}</h5>
      {/* Category and edit. */}
      <div className="flex items-center justify-between">
        <h4 className="bg-accent-orange px-5 py-2 text-sm font-bold text-wh-900">
          {category}
        </h4>
        <div className="mt-4">
          {isEditable ? (
            <div className="flex justify-between gap-3">
              <button onClick={handleCancelEdit}>
                <FcCancel size={24} />
              </button>
            </div>
          ) : (
            <button onClick={handleEnableEdit}>
              <FaRegEdit size={24} className="text-accent-red" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PostHeader;
