import { Suspense } from "react";
import SearchBar from "./_components/search-bar";
import UsersList from "./_components/users-list";
import UsersSkeleton from "./_components/users-skeleton";
import Link from "next/link";

type Props = {
  searchParams?: Promise<{ q?: string; page?: string; perPage?: string }>;
};

export default async function UsersPage({ searchParams }: Props) {
  const sp = (await searchParams) ?? {};
  const query = sp.q;
  const page = Number(sp.page) || 1;
  const perPage = Number(sp.perPage) || 5;

  return (
    <main className="p-8">
      <h1 className="font-heading mb-4 text-4xl font-bold">
        Users<span className="text-accent"> .</span>
      </h1>

      <div className="mb-4">
        <SearchBar />
      </div>
      <Link
        href="/users/me"
        className="hover:bg-muted block max-w-md rounded border p-4 transition"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="font-semibold">You</div>
            <div className="text-muted-foreground text-sm">
              Go to your blog page
            </div>
          </div>
          <span className="text-sm underline">Open</span>
        </div>
      </Link>
      <Suspense fallback={<UsersSkeleton />}>
        <UsersList q={query} page={page} perPage={perPage} />
      </Suspense>
    </main>
  );
}
