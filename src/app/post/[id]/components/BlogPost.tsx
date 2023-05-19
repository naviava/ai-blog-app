"use client";

// React and Next.
import { useCallback, useMemo, useState } from "react";
import Image from "next/image";

// External packages.
import { format } from "date-fns";
import { FcCancel } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";

// Types.
import { Post } from "@prisma/client";
import PostHeader from "./PostHeader";
import PostTitle from "./PostTitle";
import SocialLinks from "@/components/SocialLinks";

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const [isEditable, setIsEditable] = useState(false);

  const [title, setTitle] = useState(post.title);
  const [titleError, setTitleError] = useState("");

  const [content, setContent] = useState(post.content);
  const [contentError, setContentError] = useState("");

  const formattedDate = useMemo(
    () => format(post.createdAt, "PP"),
    [post.createdAt]
  );

  const onSubmit = useCallback((evt: React.SyntheticEvent) => {
    evt.preventDefault();
  }, []);

  return (
    <div className="prose mb-10 w-full max-w-full">
      <PostHeader
        post={post}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
      />
      <form onSubmit={onSubmit}>
        <PostTitle
          post={post}
          title={title}
          formattedDate={formattedDate}
          isEditable={isEditable}
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
