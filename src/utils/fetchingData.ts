const HTTPURL_REVIEWS = process.env.NEXT_PUBLIC_URL_REVIEWS;
const HTTPURL_BOOKS = process.env.NEXT_PUBLIC_URL_BOOKS;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getReview = async (author: string) => {
  const data = await fetch(
    `${HTTPURL_REVIEWS}?author=${author}&api-key=${API_KEY}`
  );
  const parsed = data.json();
  return parsed;
};

export const getNewsBooks = async () => {
  const data = await fetch(`${HTTPURL_BOOKS}=${API_KEY}`);
  const parsed = data.json();
  return parsed;
};

export const fetchBooks = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/books", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
