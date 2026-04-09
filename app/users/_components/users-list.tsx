import Link from "next/link";
import { fetchUsers } from "@/lib/server/jsonPlaceholder";
import Pagination from "@/components/pagination";

type Props = {
  q?: string;
  page?: number;
  perPage?: number;
};

export default async function UsersList({ q, page = 1, perPage = 5 }: Props) {
  const users = await fetchUsers({ revalidate: 60 });

  const query = (q ?? "").trim().toLowerCase();
  const filtered = query
    ? users.filter(
        (u) =>
          u.name.toLowerCase().includes(query) ||
          u.email.toLowerCase().includes(query)
      )
    : users;

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  const paged = filtered.slice(start, start + perPage);

  const buildHref = (nextPage: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    params.set("page", String(nextPage));
    params.set("perPage", String(perPage));
    return `/users?${params.toString()}`;
  };

  return (
    <>
      <Pagination
        page={safePage}
        totalPages={totalPages}
        totalItems={total}
        label="users"
        buildHref={buildHref}
      />

      <ul className="space-y-3">
        {paged.map((u) => (
          <li
            key={u.id}
            className="flex items-center justify-between rounded border p-4"
          >
            <div>
              <div className="font-semibold">{u.name}</div>
              <div className="text-muted-foreground text-sm">{u.email}</div>
              <div className="text-sm">{u.company?.name}</div>
            </div>

            <Link
              href={`/users/${u.id}`}
              className="bg-accent rounded px-3 py-1 text-white"
            >
              View Posts
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
