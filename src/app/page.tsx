import Image from "next/image";
import BookList from "../components/BookList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BookList />
    </main>
  );
}
