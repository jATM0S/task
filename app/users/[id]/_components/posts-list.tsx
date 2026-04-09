import Link from "next/link";
import { fetchUserPosts } from "@/lib/server/jsonPlaceholder";

type Props = {
  userId: string;
  page?: number;
  perPage?: number;
};

export default async function PostsList({
  userId,
  page = 1,
  perPage = 5,
}: Props) {
  const posts = await fetchUserPosts(userId, { revalidate: 60 });

  const total = posts.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  const paged = posts.slice(start, start + perPage);

  const buildHref = (nextPage: number) => {
    const params = new URLSearchParams();
    params.set("page", String(nextPage));
    params.set("perPage", String(perPage));
    return `/users/${userId}?${params.toString()}`;
  };

  return (
    <>
      <div className="text-muted-foreground mb-3 flex items-center justify-between text-sm">
        <span>
          Page {safePage} of {totalPages} ({total} posts)
        </span>
        <div className="flex gap-2">
          <Link
            aria-disabled={safePage <= 1}
            tabIndex={safePage <= 1 ? -1 : 0}
            className={`rounded border px-2 py-1 ${safePage <= 1 ? "pointer-events-none opacity-50" : ""}`}
            href={buildHref(safePage - 1)}
          >
            Prev
          </Link>
          <Link
            aria-disabled={safePage >= totalPages}
            tabIndex={safePage >= totalPages ? -1 : 0}
            className={`rounded border px-2 py-1 ${safePage >= totalPages ? "pointer-events-none opacity-50" : ""}`}
            href={buildHref(safePage + 1)}
          >
            Next
          </Link>
        </div>
      </div>

      <ul className="space-y-4">
        {paged.map((p) => (
          <li key={p.id} className="rounded border p-4">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm">{p.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
