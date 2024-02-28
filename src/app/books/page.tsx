'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/Container'

interface AudibleBooksPayload {
    authors: string[];
    titles: string[];
  }

interface WishlistPayload {
  [title: string]: string[];
}

export default function ReadingList() {

const [audibleBooks, setAudible] = useState<AudibleBooksPayload | null>(null);
const [isLoading, setIsLoading] = useState(true)
const [wishlist, setWishlist] = useState<WishlistPayload | null>(null);
const [isLoadingWishlist, setIsLoadingWishlist] = useState(true)

useEffect(() => {
  async function fetchAudibleBooks() {
    setIsLoading(true) 
    try {
      const response = await fetch('api/audible')
      const data = await response.json()
      console.log("data", data)
      setAudible(data)
    } catch (error) {
      console.error('Failed to fetch books', error)
    }
    setIsLoading(false) 
  }

  async function fetchWishlist() {
    setIsLoadingWishlist(true) 
    try {
      const response = await fetch('api/wishlist')
      const data = await response.json()
      console.log("wishlist", data)
      setWishlist(data)
    } catch (error) {
      console.error('Failed to fetch wishlist', error)
    }
    setIsLoadingWishlist(false) 
  }
  fetchAudibleBooks()
  fetchWishlist()
}, [])

return (
  <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Reading List:
          </h1>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            audibleBooks && audibleBooks.titles.map((title, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">{title}</h2>
                  <p className="text-md text-zinc-600 dark:text-zinc-400">by {audibleBooks.authors[index]}</p>
                </div>
              ))
            )}
        </div>
      </Container>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Wishlist:
          </h1>

          {isLoadingWishlist ? (
  <p>Loading...</p>
) : (
  wishlist && Object.entries(wishlist).map(([title, authors], index) => (
    <div key={index} className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">{title}</h2>
      {authors.map((author, index) => (
        <p key={index} className="text-md text-zinc-600 dark:text-zinc-400">by {author}</p>
      ))}
    </div>
  ))
)}
</div>
</Container>
</>
)
} 