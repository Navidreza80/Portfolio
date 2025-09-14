/* eslint-disable */

import { useTransition } from "react";

const SingleComment = ({
  c,

  handleDelete,
  currentUserId,
}: {
  c: any;

  handleDelete: any;
  currentUserId: string | null;
}) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="border-b pb-4 flex justify-between">
      <div>
        <p className="font-medium">{c.author.name ?? c.author.email}</p>
        <p className="text-sm text-muted-foreground">
          {new Date(c.createdAt).toLocaleString()}
        </p>
        <p className="mt-2">{c.content}</p>
      </div>

      {currentUserId === c.author.id && (
        <button
          onClick={() => handleDelete(c.id, startTransition)}
          disabled={isPending}
          className="text-red-500 hover:underline text-sm cursor-pointer"
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
      )}
    </div>
  );
};
export default SingleComment;
