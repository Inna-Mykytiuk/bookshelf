import prisma from "@/lib/prismadb";
import { NextResponse, NextRequest } from "next/server";


export const GET = async (req: NextRequest) => {
  try {
    const books = await prisma.book.findMany();
    return new NextResponse(JSON.stringify(books, null, 2), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, null, 2),
      { status: 500 }
    );
  }
};
