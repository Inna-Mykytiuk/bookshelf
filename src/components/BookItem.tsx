"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Book {
  id: string;
  title: string;
  author: string;
  price: string;
  description: string;
  category: string;
  status: string;
  img: string;
}

interface BookItemProps {
  id: string;
}

const BookItem: React.FC<BookItemProps> = ({ id }) => {
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      const fetchBook = async () => {
        try {
          const response = await fetch(`/api/books/${id}`, {
            method: "GET",
          });

          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }

          const data = await response.json();
          setBook(data);
        } catch (error: any) {
          setError(error.message);
          console.error("Error fetching book:", error);
        }
      };

      fetchBook();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.price}</p>
      <p>{book.description}</p>
      <p>Category: {book.category}</p>
      <p>Status: {book.status}</p>
      <Image
        alt="Book cover"
        src={book.img}
        height={400}
        width={360}
        className="h-[600px] aspect-video w-[400px] object-cover"
      />
      <Link href="/">Back to book list</Link>
    </div>
  );
};

export default BookItem;
