import Link from "next/link";
import { fetchUsers } from "@/lib/server/jsonPlaceholder";

type Props = {
  q?: string;
};

export default async function UsersList({ q }: Props) {
  const users = await fetchUsers({ revalidate: 60 });

  const query = (q ?? "").trim().toLowerCase();
  const filtered = query
    ? users.filter(
        (u) =>
          u.name.toLowerCase().includes(query) ||
          u.email.toLowerCase().includes(query)
      )
    : users;

  return (
    <>
      <ul className="space-y-3">
        {filtered.map((u) => (
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
