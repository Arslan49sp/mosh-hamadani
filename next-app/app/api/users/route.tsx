import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Arslan" },
    { id: 2, name: "majeed" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name)
    return NextResponse.json(
      { error: "you need to provide the name." },
      { status: 400 }
    );

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
