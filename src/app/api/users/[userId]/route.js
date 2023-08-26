import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  const nombre = searchParams.get("nombre");
  const apellido = searchParams.get("apellido");
  console.log("nombre", nombre, "apellido", apellido);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}

export async function PUT(request, { params }) {
  const { userId } = params;
  const body = await request.json();
  return NextResponse.json({ userId, body });
}

export function DELETE(request, { params }) {
  console.log("params", params);
  return NextResponse.json({
    message: `Se eliminó el usuario: ${params.userId}`,
  });
}
