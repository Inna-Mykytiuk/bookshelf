"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
  description: string;
  category: string;
  status: string;
  img: string;
}

// Типи для стану компонента
interface BooksState {
  books: Book[];
  error: string;
}

const BooksList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setBooks(data);
      } catch (error: any) {
        setError(error.message);
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(books);
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.price}</p>
            <p>{book.description}</p>
            <p>Category : {book.category}</p>
            <p>Status : {book.status}</p>
            <Image
              alt="Book cover"
              src={book.img}
              height={400}
              width={360}
              className="h-[600px] aspect-video w-[400px] object-cover "
            />
            <Link href={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
