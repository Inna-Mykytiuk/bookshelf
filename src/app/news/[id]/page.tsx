import React from 'react'
import NewsItem from '@/components/NewsItem'
import { Book } from '@/types/types';

interface NewsItemProps {
  book: Book;
}
const NewsIdPage = ({ book }: NewsItemProps) => {
  return (
    <div>
      <NewsItem book={book} />
    </div>
  )
}

export default NewsIdPage
