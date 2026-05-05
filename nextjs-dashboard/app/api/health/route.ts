import { NextResponse, NextRequest } from "next/server";
import { v4 as uuidv4} from "uuid";


// Handle GET requests (Read)
export async function GET(request: NextRequest) {
  const users = { message: "ok" };
  return NextResponse.json(users);
}
