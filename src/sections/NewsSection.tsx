import Link from "next/link";
import React from "react";
import News from "@/components/News";
import { getNewsBooks } from "@/utils/fetchingData";

interface NewsSectionProps {
  showLoadMore: boolean;
  showReadAllLink: boolean;
}

export default async function NewsSection({
  showLoadMore,
  showReadAllLink,
}: NewsSectionProps) {
  const data = await getNewsBooks();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <News data={data.results.books} showLoadMore={showLoadMore} />
      {showReadAllLink && <Link href="/news">Read all articles</Link>}
    </main>
  );
}
