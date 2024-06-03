// import NewsSection from "@/sections/NewsSection";
import { fetchBooks } from "@/utils/fetchingData";
import BookList from "@/components/BookList";

export default async function Home() {
  const data = await fetchBooks();
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BookList data={data} />
      {/* <NewsSection showLoadMore={false} showReadAllLink={true} /> */}
    </main>
  );
}
