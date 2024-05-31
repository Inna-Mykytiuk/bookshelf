'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import LoadMoreButton from './ui/LoadMoreButton'

interface NewsProps {
  showLoadMore: boolean
}

const News: React.FC<NewsProps> = ({ showLoadMore }) => {
  const [books, setBooks] = useState<any[]>([])
  const [visibleBooks, setVisibleBooks] = useState<number>(3)
  const [loading, setLoading] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(true)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=')
        console.log('Books data:', response.data.results.books) // Log the books data
        setBooks(response.data.results.books)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  const handleLoadMore = () => {
    setVisibleBooks((prevVisibleBooks) => {
      const newVisibleBooks = prevVisibleBooks + 3
      if (newVisibleBooks >= books.length) {
        setHasMore(false)
      }
      return newVisibleBooks
    })
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {books.slice(0, visibleBooks).map((book, index) => (
            <Link href={`/news/${book.primary_isbn13}`} key={index}>

              <div>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>Author: {book.author}</p>
                {book.book_image && <Image src={book.book_image} width={150} height={225} alt={`${book.title} cover`} />}
              </div>

            </Link>
          ))}
          {showLoadMore && hasMore && <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>}
        </div>
      )}
    </div>
  )
}

export default News
