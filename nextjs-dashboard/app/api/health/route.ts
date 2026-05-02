import { NextResponse, NextRequest } from "next/server";

// Handle GET requests (Read)
export async function GET() {
  const users = { message: "ok" };
  return NextResponse.json(users);
}
