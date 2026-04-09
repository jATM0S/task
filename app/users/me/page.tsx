import type { Metadata } from "next";
import Link from "next/link";
import MyPosts from "./_components/my-posts";

export const metadata: Metadata = {
  title: "You",
};

export default function MyBlogPage() {
  return (
    <main className="p-8">
      <Link className="mb-4 inline-block underline" href="/users">
        Back
      </Link>

      <h1 className="mb-2 text-2xl font-bold">You</h1>
      <p className="text-muted-foreground">
        This is your personal blog page. Your posts are stored in localStorage.
      </p>

      <MyPosts />
    </main>
  );
}
