"use client";

// External packages.
import { useAutoAnimate } from "@formkit/auto-animate/react";

// Types.
import { Post } from "@prisma/client";

interface PostTitleProps {
  post: Post;
  title: string;
  formattedDate: string;
  isEditable: boolean;
}

const PostTitle: React.FC<PostTitleProps> = ({
  post,
  title,
  formattedDate,
  isEditable,
}) => {
  const [animationRef] = useAutoAnimate<HTMLDivElement>();

  return (
    <>
      {/* Header. */}
      {isEditable ? (
        <div ref={animationRef}>
          <textarea
            className="w-full rounded-md border-2 bg-wh-50 p-3"
            placeholder="Title"
            value={title}
            onChange={(evt) => console.log(evt.target.value)}
          />
        </div>
      ) : (
        <div ref={animationRef}>
          <h3 className="mt-3 text-3xl font-bold">{post.title}</h3>
        </div>
      )}
      <div className="flex gap-3">
        <h5 className="text-xs font-semibold">By {post.author}</h5>
        <h6 className="text-xs text-wh-300">{formattedDate}</h6>
      </div>
    </>
  );
};

export default PostTitle;
