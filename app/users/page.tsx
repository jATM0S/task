import { Suspense } from "react";
import SearchBar from "./_components/search-bar";
import UsersList from "./_components/users-list";
import UsersSkeleton from "./_components/users-skeleton";

type Props = {
  searchParams?: Promise<{ q?: string }>;
};

export default async function UsersPage({ searchParams }: Props) {
  const sp = (await searchParams) ?? {};
  const query = sp.q;

  return (
    <main className="p-8">
      <h1 className="font-heading mb-4 text-4xl font-bold">
        Users<span className="text-accent"> .</span>
      </h1>

      <div className="mb-4">
        <SearchBar />
      </div>

      <Suspense fallback={<UsersSkeleton />}>
        <UsersList q={query} />
      </Suspense>
    </main>
  );
}
