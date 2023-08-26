import { NextResponse } from "next/server";
import fs from "fs";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json(body);
}
