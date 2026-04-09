"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useDebounce from "@/lib/hooks/useDebounce";

type Props = {
  placeholder?: string;
};

export default function SearchBar({ placeholder }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const q = params.get("q") ?? "";
  const [value, setValue] = useState(q);
  const debounced = useDebounce(value, 300);

  useEffect(() => {
    setValue(q);
  }, [q]);

  useEffect(() => {
    const url = new URLSearchParams(params.toString());
    const next = debounced.trim();
    if (next) url.set("q", next);
    else url.delete("q");
    router.replace(`${pathname}?${url.toString()}`);
  }, [debounced, pathname, router]);

  return (
    <input
      placeholder={placeholder ?? "Search by name or email"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full max-w-md rounded border px-3 py-2"
    />
  );
}
