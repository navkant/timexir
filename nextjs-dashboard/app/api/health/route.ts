import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { v4 as uuidv4} from "uuid";


// Handle GET requests (Read)
export async function GET(request: NextRequest) {
  const jwt_token = jwt.sign({ foo: "bar" }, process.env.AUTH_SECRET);
  console.log(`jwt: ${jwt_token}`);
  console.log(`uuid: ${uuidv4()}`)

  const decoded = jwt.verify(jwt_token, process.env.AUTH_SECRET);
  console.log(`decoded: ${JSON.stringify(decoded)}`);

  const users = { message: "ok" };
  return NextResponse.json(users);
}
