"use client";

import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/books", {
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
    </div>
  );
};

export default Books;
