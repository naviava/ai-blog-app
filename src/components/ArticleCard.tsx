"use client";

// React and Next.
import Link from "next/link";

// External packages.
import clsx from "clsx";
import { format } from "date-fns";

// Types.
import { Post } from "@prisma/client";
import { useMemo } from "react";

interface ArticleCardProps {
  post: Post;
  className?: string;
  imageHeight?: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  post,
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}) => {
  const { id, title, author, createdAt, image, snippet } = post || {};

  const formattedDate = useMemo(
    () => format(new Date(createdAt), "PP"),
    [createdAt]
  );

  return (
    <div className={className}>
      <Link
        href={`/post/${id}`}
        className="basis-full transition hover:opacity-70"
      >
        <div className={`relative mb-3 w-auto ${imageHeight}`}>
          Image goes here
        </div>
      </Link>
      <div className="basis-full hover:opacity-70">
        <Link href={`/post/${id}`}>
          <h4
            className={clsx(
              "font-bold hover:text-accent-green",
              isSmallCard ? "text-base line-clamp-2" : "text-lg"
            )}
          >
            {title}
          </h4>
        </Link>
        <div className={clsx("gap-3", isSmallCard ? "my-2" : "my-3 flex")}>
          <h5 className="text-xs font-semibold">{author}</h5>
          <h6 className="text-xs text-wh-300">{formattedDate}</h6>
        </div>
        <p
          className={clsx(
            "text-wh-100",
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          )}
        >
          {snippet}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
