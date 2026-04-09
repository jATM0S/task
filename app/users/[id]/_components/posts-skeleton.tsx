import React from "react";

export default function PostsSkeleton() {
  return (
    <ul className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="rounded border p-4">
          <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
          <div className="bg-muted mt-3 h-3 w-full animate-pulse rounded" />
          <div className="bg-muted mt-2 h-3 w-5/6 animate-pulse rounded" />
        </li>
      ))}
    </ul>
  );
}
