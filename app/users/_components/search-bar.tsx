"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  placeholder?: string;
};

export default function SearchBar({ placeholder }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const q = params.get("q") ?? "";

  return (
    <input
      placeholder={placeholder ?? "Search by name or email"}
      defaultValue={q}
      onChange={(e) => {
        const url = new URLSearchParams(params.toString());
        const value = e.target.value;
        if (value) url.set("q", value);
        else url.delete("q");
        router.replace(`${pathname}?${url.toString()}`);
      }}
      className="w-full max-w-md rounded border px-3 py-2"
    />
  );
}
