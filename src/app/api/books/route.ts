// import { NextResponse, NextRequest } from "next/server"
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   try {
//     const books = await prisma.book.findMany();
//     res.status(200).json(books);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch books' });
//   }
// }

import prisma from "../../lib/prismadb";
import { NextResponse, NextRequest } from "next/server";


export const GET = async (req: NextRequest) => {
  try {
    const books = await prisma.book.findMany();
    console.log("Fetched books from database:", books); // Додаємо логування
    return new NextResponse(JSON.stringify(books, null, 2), { status: 200 });
  } catch (err) {
    console.log("Error fetching books:", err); // Додаємо логування
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, null, 2),
      { status: 500 }
    );
  }
};
