// React and Next.
import Link from "next/link";
import Image from "next/image";

// Types.
import { Post } from "@prisma/client";

interface TrendingCardProps {
  className?: string;
  post: Post;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ className, post }) => {
  return (
    <Link
      href={`/post/${post?.id}`}
      className={`${className} relative mt-7 block h-96 w-full transition hover:opacity-70 sm:mt-0 sm:h-auto`}
    >
      <div className="relative z-0 h-full w-full">
        <Image
          fill
          alt="Main image of the trending article"
          src={post?.image}
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="z-1 absolute left-0 top-0 h-full w-full bg-gradient-gradual" />
      <div className="z-2 absolute bottom-0 left-0 p-3">
        <h4 className="inline-block bg-accent-orange px-5 py-1 font-semibold text-wh-900">
          {post?.category}
        </h4>
        <div className="mt-2 text-wh-100">{post?.title}</div>
      </div>
    </Link>
  );
};

export default TrendingCard;
