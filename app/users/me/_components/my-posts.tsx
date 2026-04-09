"use client";

import { useState } from "react";
import AddPost from "./add-post";
import {
  deleteLocalPost,
  readLocalPosts,
  type LocalPost,
} from "../../../../lib/local-posts";

export default function MyPosts() {
  const [posts, setPosts] = useState<LocalPost[]>(() => readLocalPosts());

  return (
    <section className="mt-6 max-w-2xl">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">Your posts</h2>
        <AddPost updatePosts={setPosts} />
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground text-sm">No local posts yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.id} className="rounded border p-4">
              <div className="text-muted-foreground mb-1 text-xs">
                {new Date(p.createdAt).toLocaleString()}
              </div>

              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold">{p.title}</h3>
                <div className="flex shrink-0 items-center gap-2">
                  <AddPost post={p} updatePosts={setPosts} />
                  <button
                    type="button"
                    className="rounded border px-3 py-2 text-sm text-red-600"
                    onClick={() => setPosts(deleteLocalPost(p.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="mt-2 text-sm">{p.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
