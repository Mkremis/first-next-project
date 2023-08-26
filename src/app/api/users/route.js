import { NextResponse } from "next/server";
import fs from "fs";
import db from "/users.json";

const dataBase = [];

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const body = await request.json();
  if (db.length) db.map((d) => dataBase.push(d));
  dataBase.push(body);
  fs.writeFileSync("src/app/api/users/users.json", JSON.stringify(dataBase));
  return NextResponse.json({ message: "Creando datos." });
}

export function PUT() {
  return NextResponse.json({ message: "Actualizando datos." });
}

export function DELETE() {
  return NextResponse.json({ message: "Eliminando datos." });
}
