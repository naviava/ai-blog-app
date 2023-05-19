// Types.
import { Post } from "@prisma/client";

// Components.
import ArticleCard from "./ArticleCard";

interface OtherProps {
  posts: Post[];
}

const Other: React.FC<OtherProps> = ({ posts }) => {
  return (
    <section className="mb-16 pt-4">
      <hr className="border-1" />
      {/* Header */}
      <p className="my-8 text-2xl font-bold">Other interesting articles</p>
      <div className="grid-cols-2 gap-16 sm:grid">
        <ArticleCard
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
          post={posts[0]}
        />
        <ArticleCard
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
          post={posts[1]}
        />
        <ArticleCard
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
          post={posts[2]}
        />
        <ArticleCard
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
          post={posts[3]}
        />
      </div>
    </section>
  );
};

export default Other;
