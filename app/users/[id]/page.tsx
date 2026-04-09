import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import PostsList from "./_components/posts-list";
import PostsSkeleton from "./_components/posts-skeleton";

type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ page?: string; perPage?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Posts • User ${id}`,
  };
}

export default async function UserPostsPage({ params, searchParams }: Props) {
  const { id } = await params;
  const sp = (await searchParams) ?? {};
  const page = Number(sp.page) || 1;
  const perPage = Number(sp.perPage) || 5;

  return (
    <main className="p-8">
      <Link className="mb-4 inline-block underline" href="/users">
        Back
      </Link>

      <h1 className="mb-4 text-2xl font-bold">Posts for user {id}</h1>

      <Suspense fallback={<PostsSkeleton />}>
        <PostsList userId={id} page={page} perPage={perPage} />
      </Suspense>
    </main>
  );
}
