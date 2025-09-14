"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export interface CreatePostData {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
  published?: boolean;
  featured?: boolean;
  readTime?: number;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  authorId: string;
  categoryId?: string;
  category: string;
  tags: string;
}

export async function createPost(data: CreatePostData) {
  try {
    const post = await prisma.post.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        featuredImage: data.featuredImage,
        published: data.published ?? false,
        featured: data.featured ?? false,
        readTime: data.readTime,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaKeywords: data.metaKeywords,
        authorId: data.authorId,
        categoryId: data.categoryId,
        category: data.category,
        tags: data.tags,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    revalidatePath("/admin/posts");
    return { success: true, post };
  } catch (error) {
    console.error("Error creating post:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create post",
    };
  }
}

export async function getAllPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        comments: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

export async function deletePost(postId: string) {
  try {
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    revalidatePath("/admin/posts");
    return { success: true };
  } catch (error) {
    console.error("Error deleting post:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete post",
    };
  }
}

export async function updatePostStatus(postId: string, published: boolean) {
  try {
    const post = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        published,
      },
    });

    revalidatePath("/admin/posts");
    return { success: true, post };
  } catch (error) {
    console.error("Error updating post status:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to update post status",
    };
  }
}

export async function getAllPostsByUser() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

export async function getPostById(id: string) {
  return prisma.post.findUnique({
    where: { id },
    include: {
      author: { select: { name: true, email: true } },
      comments: {
        select: { id: true, author: true, content: true, createdAt: true },
      },
    },
  });
}
