import { NextResponse } from "next/server";
import { google } from "googleapis";

// Handle GET requests (Read)
export async function GET(req: Request, res: Response) {
  const users = { message: "ok" };
  return NextResponse.json(users);
}

// Handle POST requests (Create)
export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json(
    { message: "User created", data: body },
    { status: 201 },
  );
}
