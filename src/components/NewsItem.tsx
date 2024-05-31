'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'

const NewsItem: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [book, setBook] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchBook = async () => {
      if (id) {
        try {
          setLoading(true)
          const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=8N1AbWqRpnQWeV5VdRc9LcAyq1NAOG3p`)
          const book = response.data.results.books.find((b: any) => b.primary_isbn13 === id)
          setBook(book)
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error)
          setLoading(false)
        }
      }
    }
    fetchBook()
  }, [id])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!book) {
    return <p>Book not found</p>
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      {book.book_image && <Image src={book.book_image} width={300} height={450} alt={`${book.title} cover`} />}
    </div>
  )
}

export default NewsItem