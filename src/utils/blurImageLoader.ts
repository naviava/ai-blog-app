// Types.
import { Post } from "@prisma/client";

export default async function blurImageLoader(posts: Post[]) {
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../../public${post.image}`);
      return { ...post, image: imageModule.default };
    })
  );

  return formattedPosts;
}
