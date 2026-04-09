import { fetchUserPosts } from "@/lib/server/jsonPlaceholder";
import Pagination from "@/components/pagination";

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
      <Pagination
        page={safePage}
        totalPages={totalPages}
        totalItems={total}
        label="posts"
        buildHref={buildHref}
      />

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
