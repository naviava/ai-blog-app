// Types.
import { Post } from "@prisma/client";

export async function blurMultipleImages(posts: Post[]) {
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../../public${post.image}`);
      return { ...post, image: imageModule.default };
    })
  );

  return formattedPosts;
}

export async function blurSingleImage(post: Post) {
  const imageModule = require(`../../public${post.image}`);
  return { ...post, image: imageModule.default };
}
