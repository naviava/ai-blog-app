// React and Next.
import Link from "next/link";

interface TrendingCardProps {
  className?: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ className }) => {
  return (
    <Link
      // href={`/post/${post?.id}`}
      href="/"
      className={`${className} relative mt-7 block h-96 w-full transition hover:opacity-70 sm:mt-0 sm:h-auto`}
    >
      <div className="relative z-0 h-full w-full bg-wh-500">
        {/* TODO: IMAGE GOES HERE */}
      </div>
      <div className="z-1 absolute left-0 top-0 h-full w-full bg-gradient-gradual" />
      <div className="z-2 absolute bottom-0 left-0 p-3">
        <h4 className="inline-block bg-accent-orange px-5 py-1 font-semibold text-wh-900">
          Category
        </h4>
        <div className="mt-2 text-wh-100">Post Title</div>
      </div>
    </Link>
  );
};

export default TrendingCard;
