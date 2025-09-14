import { getPostById } from "@/app/actions/Posts";
import { CommentForm } from "@/components/CommentForm";
import { CommentList } from "@/components/CommentList";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getServerCookie } from "@/helper/server-cookie";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPostById(id);
  const userId = await getServerCookie("userId");
  const isLoggedIn = typeof userId === "string";

  if (!post) return notFound();

  return (
    <article className="container mx-auto py-10 max-w-3xl text-foreground">
      {/* Title & Meta */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
        {post.excerpt && (
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-3 items-center text-sm text-purple-300/60">
          <span>
            By <strong>{post.author.name}</strong>
          </span>
          <Separator orientation="vertical" className="h-4" />
          <span>{format(new Date(post.createdAt), "MMMM dd, yyyy")}</span>
          {post.readTime && (
            <>
              <Separator orientation="vertical" className="h-4" />
              <span>{post.readTime} min read</span>
            </>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <Image
          src={post.featuredImage}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-[400px] object-cover rounded-lg mb-8 shadow"
        />
      )}

      {/* Content */}
      <div
        className="prose prose-purple dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Category & Tags */}
      <footer className="mt-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.category && (
            <Badge
              variant="outline"
              className="bg-purple-300/50 text-background border-white/50"
            >
              {post.category}
            </Badge>
          )}
          {post.tags &&
            post.tags.split(",").map((tag) => (
              <Badge
                key={tag.trim()}
                variant="secondary"
                className="bg-purple-600/30 text-foreground"
              >
                #{tag.trim()}
              </Badge>
            ))}
        </div>
      </footer>

      {/* Comments */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          {post.comments.length} Comments
        </h2>
        <CommentList
          comments={post.comments.map((c) => ({
            ...c,
            createdAt: c.createdAt.toISOString(),
          }))}
          currentUserId={userId}
        />

        {/* Comment Form */}
        <CommentForm isLoggedInInitial={isLoggedIn} postId={post.id} />
      </section>
    </article>
  );
}
