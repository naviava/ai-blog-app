// Types.
import { Post } from "@prisma/client";

// Components.
import ArticleCard from "@/components/ArticleCard";

interface TechProps {
  posts: Post[];
}

const Tech: React.FC<TechProps> = ({ posts }) => {
  return (
    <section>
      <hr className="border-1" />
      {/* Header */}
      <div className="my-8 flex items-center gap-3">
        <h4 className="bg-accent-orange px-5 py-2 text-sm font-bold text-wh-900">
          HOT
        </h4>
        <p className="text-2xl font-bold">Latest news in technology</p>
      </div>
      {/* Article cards. */}
      <div className="grid-cols-2 grid-rows-3 gap-8 py-5 sm:grid">
        <ArticleCard
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          post={posts[0]}
        />
        <ArticleCard
          className="col-span-1 row-span-1 mt-10 flex justify-between gap-3 sm:mt-0"
          imageHeight="h-48"
          isSmallCard
          post={posts[1]}
        />
        <ArticleCard
          className="col-span-1 row-span-1 mt-10 flex justify-between gap-3 sm:mt-0"
          imageHeight="h-48"
          isSmallCard
          post={posts[2]}
        />
        <ArticleCard
          className="col-span-1 row-span-1 mt-10 flex justify-between gap-3 sm:mt-0"
          imageHeight="h-48"
          isSmallCard
          post={posts[3]}
        />
      </div>
    </section>
  );
};

export default Tech;
