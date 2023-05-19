import prisma from "@/lib/prismadb";

export default async function getPostById(id: string) {
  try {
    const post = await prisma.post.findUnique({ where: { id } });

    return post;
  } catch (err: any) {
    console.log(err);
    return null;
  }
}
