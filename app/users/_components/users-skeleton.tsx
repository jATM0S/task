import React from "react";

export default function UsersSkeleton() {
  return (
    <ul className="space-y-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i} className="rounded border p-4">
          <div className="bg-muted h-4 w-48 animate-pulse rounded" />
          <div className="bg-muted mt-2 h-3 w-64 animate-pulse rounded" />
          <div className="bg-muted mt-2 h-3 w-40 animate-pulse rounded" />
        </li>
      ))}
    </ul>
  );
}
