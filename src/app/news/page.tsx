import React from 'react'
import News from '@/components/News'

const NewsPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <News showLoadMore={true} />
    </main>
  )
}

export default NewsPage