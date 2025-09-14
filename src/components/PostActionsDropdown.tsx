"use client";

import { deletePost, updatePostStatus } from "@/app/actions/Posts";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Post } from "@prisma/client";
import {
  Edit,
  ExternalLink,
  Eye,
  EyeOff,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { toast } from "sonner";

interface PostActionsDropdownProps {
  post: Post;
}

export function PostActionsDropdown({ post }: PostActionsDropdownProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deletePost(post.id);
      if (result.success) {
        toast.success("Post deleted successfully");
        setIsDeleteDialogOpen(false);
      } else {
        toast.error(result.error || "Failed to delete post");
      }
    });
  };

  const togglePublishStatus = () => {
    startTransition(async () => {
      const result = await updatePostStatus(post.id, !post.published);
      if (result.success) {
        toast.success(
          `Post ${!post.published ? "published" : "unpublished"} successfully`
        );
      } else {
        toast.error(result.error || "Failed to update post status");
      }
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 bg-background text-foreground border border-white/50"
        >
          <DropdownMenuItem asChild>
            <Link href={`/admin/posts/${post.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={`/posts/${post.slug}`} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Post
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={togglePublishStatus} disabled={isPending}>
            {post.published ? (
              <>
                <EyeOff className="mr-2 h-4 w-4" />
                Unpublish
              </>
            ) : (
              <>
                <Eye className="mr-2 h-4 w-4" />
                Publish
              </>
            )}
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => setIsDeleteDialogOpen(true)}
            className="text-red-600 focus:text-red-600"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent className="text-foreground">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              post &quot;{post.title}&quot; and all of its comments.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isPending}
              className="bg-red-600 hover:bg-red-700"
            >
              {isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

interface StatusToggleProps {
  postId: string;
  published: boolean;
}

export function StatusToggle({ postId, published }: StatusToggleProps) {
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    startTransition(async () => {
      const result = await updatePostStatus(postId, !published);
      if (result.success) {
        toast.success(
          `Post ${!published ? "published" : "unpublished"} successfully`
        );
      } else {
        toast.error(result.error || "Failed to update post status");
      }
    });
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className="focus:outline-none"
    >
      {published ? (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer">
          Published
        </Badge>
      ) : (
        <Badge variant="secondary" className="hover:bg-gray-200 cursor-pointer">
          Draft
        </Badge>
      )}
    </button>
  );
}
