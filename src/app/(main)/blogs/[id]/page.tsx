import { getPostById } from "@/app/actions/Posts";
import { CommentForm } from "@/components/CommentForm";
import { CommentList } from "@/components/CommentList";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getServerCookie } from "@/helper/server-cookie";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);
  const userId = await getServerCookie("userId");
  const isLoggedIn = typeof userId === "string";

  if (!post) return notFound();

  return (
    <article className="mx-auto py-10 max-w-3xl text-foreground px-5">
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
        className="prose prose-purple dark:prose-invert max-w-none text-gray-200 leading-10"
        dangerouslySetInnerHTML={{
          __html: post.content
            .replaceAll("/n", "\n")
            // Heading
            // (# -> h1)
            .replace(/^# (.*)$/gm, "<h1 class='text-4xl font-bold'>$1</h1>")
            // (## -> h2)
            .replace(/^## (.*)$/gm, "<h2 class='text-2xl font-bold'>$1</h2>")
            // (### -> h3)
            .replace(/^### (.*)$/gm, "<h3 class='text-xl font-bold'>$1</h3>") // turn `/n` into real newlines

            // Bold text (**bold**)
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            // Code editor
            .replace(/\n/g, "<br />")
            .replace(
              /```([\s\S]*?)```/g,
              `<div class="bg-gray-900 rounded-lg overflow-hidden my-4 !py-0">
                <div class="bg-gray-800 flex gap-2 px-3 !pt-1 h-[20px]">
                  <span class="w-3 h-3 rounded-full bg-red-500"></span>
                  <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span class="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <pre class="p-4 text-blue-400 text-sm overflow-x-auto"><code>$1</code></pre>
              </div>`
            )
            // Inline code (`...`)
            .replace(
              /`([^`]+)`/g,
              `<code class="bg-gray-800 text-pink-400 px-1 py-0.5 rounded">$1</code>`
            )
            // Bullet points (• item -> <li>item</li>)
            .replace(/• (.*)/g, "<li>$1</li>")
            // Wrap lists in <ul>
            .replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>")
            // Paragraphs (/n/n -> new paragraph)
            .replaceAll("/n/n", "</p><p>")
            // Line breaks (/n -> <br>)

            // Wrap first and last in <p>
            .replace(/^/, "<p>")
            .concat("</p>"),
        }}
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
