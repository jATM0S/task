import Link from "next/link";

export type PaginationProps = {
  page: number;
  totalPages: number;
  totalItems?: number;
  label?: string;
  buildHref: (nextPage: number) => string;
};

export default function Pagination({
  page,
  totalPages,
  totalItems,
  label,
  buildHref,
}: PaginationProps) {
  return (
    <div className="text-muted-foreground mb-3 flex items-center justify-between text-sm">
      <span>
        Page {page} of {totalPages}
        {` (${totalItems} ${label})`}
      </span>
      <div className="flex gap-2">
        <Link
          aria-disabled={page <= 1}
          tabIndex={page <= 1 ? -1 : 0}
          className={`rounded border px-2 py-1 ${page <= 1 ? "pointer-events-none opacity-50" : ""}`}
          href={buildHref(page - 1)}
        >
          Prev
        </Link>
        <Link
          aria-disabled={page >= totalPages}
          tabIndex={page >= totalPages ? -1 : 0}
          className={`rounded border px-2 py-1 ${page >= totalPages ? "pointer-events-none opacity-50" : ""}`}
          href={buildHref(page + 1)}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
