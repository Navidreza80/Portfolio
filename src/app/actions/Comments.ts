"use server";

import { getServerCookie } from "@/helper/server-cookie";
import prisma from "@/lib/prisma";

export async function submitComment(postId: string, content: string) {
  const userId = await getServerCookie("userId");
  if (!userId) throw new Error("Not authenticated");

  return prisma.comment.create({
    data: {
      content,
      postId,
      authorId: userId,
    },
    include: {
      author: { select: { name: true, email: true } },
    },
  });
}

export async function deleteComment(commentId: string) {
  const userId = await getServerCookie("userId");
  if (!userId) throw new Error("Not authenticated");

  // Check ownership
  const comment = await prisma.comment.findUnique({
    where: { id: commentId },
    select: { authorId: true },
  });

  if (!comment) throw new Error("Comment not found");
  if (comment.authorId !== userId) throw new Error("Not authorized");

  await prisma.comment.delete({ where: { id: commentId } });
  return { success: true };
}
