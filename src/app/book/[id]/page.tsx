import BookItem from "@/components/BookItem";

interface BookPageProps {
  params: {
    id: string;
  };
}
export default function BookPage({ params }: BookPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Book Id Page</p>
      <BookItem id={params.id} />
    </main>
  );
}
