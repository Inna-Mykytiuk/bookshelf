"use client";

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

interface BookProps {
  data: Book[];
}

const BooksList: React.FC<BookProps> = ({ data }) => {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.map((book) => (
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
