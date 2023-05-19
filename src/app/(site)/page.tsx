// React and Next.
import { useMemo } from "react";

// Types.
import { Post } from "@prisma/client";

// Components.
import Tech from "./components/Tech";
import Travel from "./components/Travel";
import Trending from "./components/Trending";
import Other from "@/components/Other";
import Sidebar from "@/components/Sidebar";
import Subscribe from "@/components/Subscribe";

// Lib and utils.
import getPosts from "@/utils/getPosts";

export default async function Home() {
  const posts = await getPosts();

  // const formattedPosts = () => {
  //   const trendingPosts: Post[] = [];
  //   const techPosts: Post[] = [];
  //   const travelPosts: Post[] = [];
  //   const otherPosts: Post[] = [];

  //   posts.forEach((post, idx) => {
  //     if (idx < 4) trendingPosts.push(post);

  //     if (post.category === "Tech") techPosts.push(post);
  //     else if (post.category === "Travel") travelPosts.push(post);
  //     else otherPosts.push(post);
  //   });

  //   return [trendingPosts, techPosts, travelPosts, otherPosts];
  // };

  // const [trendingPosts, techPosts, travelPosts, otherPosts] = formattedPosts();

  const trendingPosts = posts.slice(0, 4);
  const techPosts = posts.filter((post) => post.category === "Tech");
  const travelPosts = posts.filter((post) => post.category === "Travel");
  const otherPosts = posts.filter(
    (post) => post.category !== "Tech" && post.category !== "Travel"
  );

  return (
    <main className="px-10 leading-7">
      <Trending posts={trendingPosts} />
      <div className="mb-5 gap-10 md:flex">
        <div className="basis-3/4">
          <Tech posts={techPosts} />
          <Travel posts={travelPosts} />
          <Other posts={otherPosts} />
          <div className="hidden md:block">
            {/* AD GOES HERE */}
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          {/* AD GOES HERE */}
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
