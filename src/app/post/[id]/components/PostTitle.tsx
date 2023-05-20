"use client";

// External packages.
import { useAutoAnimate } from "@formkit/auto-animate/react";

// Types.
import { Post } from "@prisma/client";

interface PostTitleProps {
  title: string;
  author: string;
  formattedDate: string;
  isEditable: boolean;
  titleError: string;
  handleOnChangeTitle: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const PostTitle: React.FC<PostTitleProps> = ({
  title,
  author,
  formattedDate,
  titleError,
  isEditable,
  handleOnChangeTitle,
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
            onChange={handleOnChangeTitle}
          />
          {titleError && <p className="mt-1 text-wh-500">{titleError}</p>}
        </div>
      ) : (
        <div ref={animationRef}>
          <h3 className="mt-3 text-3xl font-bold">{title}</h3>
        </div>
      )}
      <div className="flex gap-3">
        <h5 className="text-xs font-semibold">By {author}</h5>
        <h6 className="text-xs text-wh-300">{formattedDate}</h6>
      </div>
    </>
  );
};

export default PostTitle;
