// Types.
import { Post } from "@prisma/client";

// Components.
import TrendingCard from "./TrendingCard";

interface TrendingProps {
  posts: Post[];
}

const Trending: React.FC<TrendingProps> = ({ posts }) => {
  return (
    <section className="pb-10 pt-3">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 px-8 py-2 text-sm font-bold text-wh-10">
          TRENDING
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="my-3 grid-cols-4 grid-rows-2 gap-5 sm:grid sm:h-[600px]">
        <TrendingCard
          className="col-span-2 row-span-2 bg-wh-500"
          post={posts[0]}
        />
        {posts.map((post, idx) => {
          if (idx > 0 && idx < 3)
            return (
              <TrendingCard
                key={post.id}
                className="col-span-2 row-span-1 bg-wh-500"
                post={posts[idx]}
              />
            );
        })}
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        quisquam! Ipsum officiis magni, laborum nostrum sequi tempora
        consequatur maxime deleniti fuga architecto asperiores.
      </p>
    </section>
  );
};

export default Trending;
