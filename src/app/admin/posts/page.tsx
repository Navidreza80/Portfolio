import { getAllPosts } from "@/app/actions/Posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDistance } from "date-fns";
import Link from "next/link";

import {
  PostActionsDropdown,
  StatusToggle,
} from "@/components/PostActionsDropdown";

export default async function AdminPostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Posts Management</h1>
          <p className="text-purple-300/50 mt-2">Manage all your blog posts</p>
        </div>
        <Link href="/admin/posts/new">
          <Button
            variant="outline"
            className="hover:bg-purple-900/90 cursor-pointer"
          >
            Create New Post
          </Button>
        </Link>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Comments</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-purple-300/50">No posts found</p>
                    <Link href="/admin/posts/new">
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-purple-700/30"
                      >
                        Create your first post
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="max-w-xs">
                    <div>
                      <Link
                        href={`/blogs/${post.id}`}
                        className="font-medium hover:underline line-clamp-1"
                      >
                        {post.title}
                      </Link>
                      {post.excerpt && (
                        <p className="text-sm text-purple-300/50 mt-1 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{post.author.name}</span>
                      <span className="text-sm text-purple-300/50">
                        {post.author.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <StatusToggle postId={post.id} published={post.published} />
                  </TableCell>
                  <TableCell>
                    {post.featured ? (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Featured
                      </Badge>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span>{post.comments.length}</span>
                      <span className="text-sm text-purple-300/50">
                        comments
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-purple-300/50">
                    {formatDistance(new Date(post.createdAt), new Date(), {
                      addSuffix: true,
                    })}
                  </TableCell>
                  <TableCell className="text-sm text-purple-300/50">
                    {formatDistance(new Date(post.updatedAt), new Date(), {
                      addSuffix: true,
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <PostActionsDropdown post={post} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {posts.length > 0 && (
        <div className="mt-4 flex justify-between items-center text-sm text-foreground">
          <p>Showing {posts.length} posts</p>
          <div className="flex gap-4">
            <span>Published: {posts.filter((p) => p.published).length}</span>
            <span>Draft: {posts.filter((p) => !p.published).length}</span>
            <span>Featured: {posts.filter((p) => p.featured).length}</span>
          </div>
        </div>
      )}
    </div>
  );
}
