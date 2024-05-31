import React from 'react'
import News from '@/components/News'
import Link from 'next/link'

const NewsSection: React.FC = () => {
  return (
    <div>
      <News showLoadMore={false} />
      <Link href="/news">
        Read all articles
      </Link>
    </div>
  )
}

export default NewsSection
