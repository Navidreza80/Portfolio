/* eslint-disable */

"use client";

import { deleteComment } from "@/app/actions/Comments";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import SingleComment from "./SingleComment";

export function CommentList({
  comments,
  currentUserId,
}: {
  comments: any[];
  currentUserId: null | string;
}) {
  const router = useRouter();

  const handleDelete = (id: string, startTransition: any) => {
    startTransition(async () => {
      try {
        await deleteComment(id);
        toast.success("Comment deleted");

        router.refresh();
      } catch {
        toast.error("Error");
      }
    });
  };

  return (
    <div className="space-y-6">
      {comments.map((c) => {
        return (
          <SingleComment
            key={c.id}
            c={c}
            handleDelete={handleDelete}
            currentUserId={currentUserId}
          />
        );
      })}
    </div>
  );
}
