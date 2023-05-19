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
import { blurMultipleImages } from "@/utils/blurImageLoader";

export default async function Home() {
  const rawPosts = await getPosts();
  const posts = await blurMultipleImages(rawPosts);

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
