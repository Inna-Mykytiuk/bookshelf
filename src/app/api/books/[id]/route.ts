import prisma from "@/lib/prismadb";
import { NextResponse, NextRequest } from "next/server";


interface RequestParams {
  id: string;
}


export const GET = async (req: NextRequest, { params }: { params: RequestParams }) => {
  const { id } = params;

  try {
    const book = await prisma.book.findUnique({
      where: { id: id },
    });

    if (!book) {
      return new NextResponse(
        JSON.stringify({ message: "Book not found!" }, null, 2),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(book, null, 2), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, null, 2),
      { status: 500 }
    );
  }
};