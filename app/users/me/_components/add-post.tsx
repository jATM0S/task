"use client";

import { useState } from "react";
import { z } from "zod";
import { addLocalPost, type LocalPost } from "../../../../lib/local-posts";

const PostSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  body: z.string().trim().min(1, "Body is required"),
});

export default function AddPost({
  updatePosts,
}: {
  updatePosts?: (posts: LocalPost[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = PostSchema.safeParse({ title, body });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    const allNewPosts = addLocalPost(result.data);
    updatePosts?.(allNewPosts);

    setTitle("");
    setBody("");
    setError(null);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="bg-accent rounded px-3 py-2 text-sm font-medium text-white"
        onClick={() => setOpen(true)}
      >
        Add Post
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onMouseDown={() => setOpen(false)}
        >
          <div
            className="bg-background w-full max-w-lg rounded p-4 shadow"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">New post</h2>
              <button
                type="button"
                className="rounded border px-2 py-1 text-sm text-red-600"
                onClick={() => setOpen(false)}
              >
                X
              </button>
            </div>

            <form className="space-y-3" onSubmit={onSubmit}>
              <div className="space-y-1">
                <label className="text-sm" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded border px-3 py-2"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm" htmlFor="body">
                  Body
                </label>
                <textarea
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="min-h-28 w-full rounded border px-3 py-2"
                />
              </div>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  className="rounded border px-3 py-2 text-sm"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-accent rounded px-3 py-2 text-sm font-medium text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
