import React from 'react'

interface LoadMoreButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
)

export default LoadMoreButton