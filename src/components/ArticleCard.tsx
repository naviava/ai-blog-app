// React and Next.
import Link from "next/link";

// External packages.
import clsx from "clsx";

interface ArticleCardProps {
  className?: string;
  imageHeight?: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}) => {
  return (
    <div className={className}>
      <Link href="/" className="basis-full transition hover:opacity-70">
        <div className={`relative mb-3 w-auto ${imageHeight}`}>
          Image goes here
        </div>
      </Link>
      <div className="basis-full hover:opacity-70">
        <Link href="/">
          <h4
            className={clsx(
              "font-bold hover:text-accent-green",
              isSmallCard ? "text-base line-clamp-2" : "text-lg"
            )}
          >
            Title
          </h4>
        </Link>
        <div className={clsx("gap-3", isSmallCard ? "my-2" : "my-3 flex")}>
          <h5 className="text-xs font-semibold">Author</h5>
          <h6 className="text-xs text-wh-300">Date</h6>
        </div>
        <p
          className={clsx(
            "text-wh-100",
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam
          illo architecto, excepturi ad sequi totam minima, maiores, numquam ab
          ea rem. Ab id iste harum maiores sunt, atque assumenda?
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
