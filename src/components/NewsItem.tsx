import React from 'react';
import Image from 'next/image';
import { Book } from '@/types/types';

interface NewsItemProps {
  book: Book;
}

const NewsItem: React.FC<NewsItemProps> = ({ book }) => {

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      {book.book_image && <Image src={book.book_image} width={150} height={225} alt={`${book.title} cover`} />}
    </div>

  );
};

export default NewsItem;