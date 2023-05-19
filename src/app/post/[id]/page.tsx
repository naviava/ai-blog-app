// Components.
import Sidebar from "@/components/Sidebar";
import BlogPost from "./components/BlogPost";

// Lib and utils.
import getPostById from "@/utils/getPostById";
import { blurSingleImage } from "@/utils/blurImageLoader";

interface IParams {
  params: { id: string };
}

const BlogPostPage = async ({ params }: IParams) => {
  const { id } = params;
  const rawPost = await getPostById(id);

  if (!rawPost) return null;
  const post = await blurSingleImage(rawPost);

  return (
    <main className="px-10 leading-7">
      <div className="mb-5 gap-10 md:flex">
        <div className="basis-3/4">
          <BlogPost post={post} />
        </div>
        <div className="basis-1/4">
          {/* AD GOES HERE */}
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;
