import React from "react";
import News from "@/components/News";
import { getBooks } from "@/utils/fetchingData";

export default async function Page() {
  const data = await getBooks();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <News data={data.results.books} showLoadMore={true} />
    </main>
  );
}