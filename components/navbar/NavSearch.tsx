"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

export default function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 500);

  // Sync searchParams URL to Input Field
  // If it gets removed (e.g., the user cleared it), it also clears the input field.
  // useEffect(() => {
  //   if (!searchParams.get("search")) {
  //     setSearch("");
  //   }
  // }, [searchParams.get("search")]);

  useEffect(() => {
    const searchValue = searchParams.get("search") || "";
    setSearch(searchValue);
  }, [searchParams]);

  return (
    <Input
      type="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}
