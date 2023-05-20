// External packages.
import { Editor } from "@tiptap/react";
import ListItem from "@tiptap/extension-list-item";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MdOutlineFormatStrikethrough } from "react-icons/md";
import { HiListBullet } from "react-icons/hi2";
import { GoListOrdered } from "react-icons/go";
import { GrBlockQuote } from "react-icons/gr";
import { VscHorizontalRule } from "react-icons/vsc";
import { ImPageBreak } from "react-icons/im";
import { FaUndoAlt, FaRedoAlt } from "react-icons/fa";

interface MenuBarProps {
  editor: Editor | null;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-6">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        <span className="p-1 text-base font-bold">B</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        <span className="p-2 text-base italic">I</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        <MdOutlineFormatStrikethrough size={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph")
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        para
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        H<span className="text-xs">1</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        H<span className="text-xs">2</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        H<span className="text-xs">3</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 })
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        H<span className="text-xs">4</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 })
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        H<span className="text-xs">5</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive("heading", { level: 6 })
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        H<span className="text-xs">6</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        <HiListBullet size={20} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        <GoListOrdered size={20} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote")
            ? "rounded-md bg-wh-500 p-1 text-wh-50"
            : "p-1"
        }
      >
        <GrBlockQuote size={20} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <VscHorizontalRule size={20} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        <ImPageBreak size={20} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <FaUndoAlt size={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <FaRedoAlt size={16} />
      </button>
    </div>
  );
};

export default MenuBar;
