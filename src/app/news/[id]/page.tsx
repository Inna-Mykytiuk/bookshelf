import { getReview } from "@/utils/fetchingData";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getReview(params.id);
  const filteredResults = data.results.filter((r: any) => r.summary !== "");

  return (
    <ul className="flex flex-col gap-[16px]">
      {filteredResults.length > 0 ? (
        filteredResults.map((r: any, index: number) => (
          <li key={`${r.book_title}-${index}`} className="bg-slate-500">
            <p>{r.book_title}</p>
            <p>{r.byline}</p>
            <p>{r.summary}</p>
          </li>
        ))
      ) : (
        <li className="bg-slate-500">
          <p>Рев&aposю до книги ще немає.</p>
        </li>
      )}
    </ul>
  );
}
