'use client'

import React, { useState, useEffect } from 'react';
import LoadMoreButton from './ui/LoadMoreButton';
import NewsItem from './NewsItem';
import { Book } from '@/types/types';

interface NewsProps {
  showLoadMore: boolean;
  data: Book[]; // Додаємо data як пропс
}

const News: React.FC<NewsProps> = ({ showLoadMore, data }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [visibleBooks, setVisibleBooks] = useState<number>(3);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setBooks(data);
      setHasMore(data.length > 3);
      console.log("All books:", data);
    }
  }, [data]);

  const handleLoadMore = () => {
    setVisibleBooks((prevVisibleBooks) => {
      const newVisibleBooks = prevVisibleBooks + 3;
      if (newVisibleBooks >= books.length) {
        setHasMore(false);
      }
      return newVisibleBooks;
    });
  };

  if (books.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {books.slice(0, visibleBooks).map((book) => (
        <NewsItem key={book.rank} book={book} />
      ))}
      {showLoadMore && hasMore && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </div>
  );
};

export default News;
