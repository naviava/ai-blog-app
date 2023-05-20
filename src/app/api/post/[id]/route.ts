// Next.
import { NextResponse } from "next/server";

// Lib and utils.
import prisma from "@/lib/prismadb";

interface IParams {
  params: { id: string };
}

export async function PATCH(req: Request, { params }: IParams) {
  try {
    const { id } = params;
    const { title, content } = await req.json();

    const post = await prisma.post.update({
      where: { id },
      data: { title, content },
    });

    return NextResponse.json(post);
  } catch (err: any) {
    console.log(err, "EDIT_POST_ERROR");
    return new NextResponse("Internal server error", { status: 500 });
  }
}
