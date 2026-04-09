"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        An unexpected error occurred while loading users.
      </p>
      <button
        type="button"
        // onClick={reset}
        onClick={() => window.location.reload()}
        className="bg-accent mt-4 rounded px-3 py-2 text-white"
      >
        Try again
      </button>
    </main>
  );
}
