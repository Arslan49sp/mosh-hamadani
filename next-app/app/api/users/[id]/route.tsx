import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10)
    return NextResponse.json(
      { error: "This user is not found." },
      { status: 404 }
    );

  return NextResponse.json({ id: params.id, name: "Arslan." });
}
