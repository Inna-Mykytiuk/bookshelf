'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import LoadMoreButton from './ui/LoadMoreButton'
import NewsItem from './NewsItem'

interface NewsProps {

  showLoadMore: boolean
}

const News: React.FC<NewsProps> = ({ showLoadMore }) => {
  const [books, setBooks] = useState<any[]>([]);
  const [visibleBooks, setVisibleBooks] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=8N1AbWqRpnQWeV5VdRc9LcAyq1NAOG3p');
        console.log('Books data:', response.data.results.books);
        // console.log(response.data.results.books[0].rank);

        // Log the books data
        setBooks(response.data.results.books);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleLoadMore = () => {
    setVisibleBooks((prevVisibleBooks) => {
      const newVisibleBooks = prevVisibleBooks + 3;
      if (newVisibleBooks >= books.length) {
        setHasMore(false);
      }
      return newVisibleBooks;
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {books.slice(0, visibleBooks).map((book, index) => (
            <Link href={`/news/${book.rank}`} key={index}>
              <NewsItem book={book} />
            </Link>

          ))}
          {showLoadMore && hasMore && <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>}
        </div>
      )}
    </div>
  );
};

export default News;
