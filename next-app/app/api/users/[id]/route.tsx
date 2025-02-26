import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: "User Not Found." }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  if (parseInt(params.id) > 10)
    return NextResponse.json({ error: "User not found!" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(request: NextRequest, { params }: Props) {
  if (parseInt(params.id) > 10)
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  return NextResponse.json({});
}
