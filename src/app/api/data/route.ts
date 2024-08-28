import { blogs } from "@/app/(data)/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(blogs);
}

export async function POST(response) {
  const { title, desc } = await response.json();
  blogs.push({
    id: blogs.length + 1,
    title,
    desc,
  });
  return NextResponse.json(blogs);
}
