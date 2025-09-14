import { getAllPosts } from "@/app/actions/Posts";
import { Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogSection = async () => {
  const posts = await getAllPosts();
  return (
    <section className="bg-background">
      <div className="mx-auto px-4 py-16 sm:px-5 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest from My Blog
          </h2>
          <p className="text-purple-300 opacity-70 max-w-2xl mx-auto mb-8">
            Exploring new technologies, sharing insights about frameworks and
            packages, and documenting my journey in the ever-evolving world of
            web development.
          </p>

          {/* Category Pills */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "border-white/10 border bg-purple-300/70"
                    : "border-white/10 hover:border-white/20 transition-all duration-500 border text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div> */}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {posts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <article className="bg-background rounded-2xl shadow-lg border-white/10 border overflow-hidden hover:shadow-2xl hover:border-purple-300/30 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={post.featuredImage ?? ""}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-purple-300/30 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-300/50 backdrop-blur-sm rounded text-xs font-semibold text-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span
                      key={post.tags}
                      className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                    >
                      <Tag className="w-3 h-3" />
                      {post.tags}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
