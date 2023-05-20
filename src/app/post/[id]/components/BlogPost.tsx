"use client";

// React and Next.
import { useCallback, useMemo, useState } from "react";
import Image from "next/image";

// External packages.
import axios from "axios";
import { format, set } from "date-fns";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// Types.
import { Post } from "@prisma/client";

// Components.
import PostHeader from "./PostHeader";
import PostTitle from "./PostTitle";
import SocialLinks from "@/components/SocialLinks";
import PostBody from "./PostBody";

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const [isEditable, setIsEditable] = useState(false);

  const [title, setTitle] = useState(post.title);
  const [titleError, setTitleError] = useState("");
  const [tempTitle, setTempTitle] = useState(title);

  const [content, setContent] = useState(post.content);
  const [contentError, setContentError] = useState("");
  const [tempContent, setTempContent] = useState(content);

  const handleOnChangeContent = useCallback(({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  }, []);

  const handleOnChangeTitle = useCallback(
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (title) setTitleError("");
      setTitle(evt.target.value);
    },
    [title]
  );

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    content: content,
    editable: isEditable,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full text-justify",
      },
    },
  });

  const handleIsEditable = useCallback(
    (bool: boolean) => {
      setIsEditable(bool);
      editor?.setEditable(bool);
    },
    [editor]
  );

  const formattedDate = useMemo(
    () => format(post.createdAt, "PP"),
    [post.createdAt]
  );

  const onSubmit = useCallback(
    async (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();

      // Custom validation.
      if (!title) setTitleError("Title is required.");
      if (editor?.isEmpty) setContentError("Content is required.");
      if (!title || editor?.isEmpty) return;

      const { data } = await axios.patch(`/api/post/${post.id}`, {
        title,
        content,
      });

      handleIsEditable(false);
      setTempTitle("");
      setTempContent("");

      setTitle(data.title);
      setContent(data.content);
      editor?.commands.setContent(data.content);
    },
    [
      editor?.isEmpty,
      editor?.commands,
      title,
      content,
      post.id,
      handleIsEditable,
    ]
  );

  return (
    <div className="prose mb-10 w-full max-w-full">
      <PostHeader
        category={post.category}
        isEditable={isEditable}
        handleIsEditable={handleIsEditable}
        editor={editor}
        setTempContent={setTempContent}
        setTempTitle={setTempTitle}
        setTitle={setTitle}
        tempContent={tempContent}
        tempTitle={tempTitle}
        title={title}
      />
      <form onSubmit={onSubmit}>
        <PostTitle
          title={title}
          author={post.author}
          formattedDate={formattedDate}
          titleError={titleError}
          isEditable={isEditable}
          handleOnChangeTitle={handleOnChangeTitle}
        />
        {/* Post image. */}
        <div className="relative mb-16 mt-2 h-96 w-auto">
          <Image
            fill
            alt={post.title}
            src={post.image}
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <PostBody
          editor={editor}
          isEditable={isEditable}
          contentError={contentError}
          setContent={setContent}
          title={title}
        />
        {/* Submit button. */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-22 mt-5 bg-accent-red px-5 font-semibold text-wh-10 transition duration-500 hover:bg-wh-500"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>
      {/* Social links. */}
      <div className="mt-10 hidden w-1/3 md:block">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default BlogPost;
