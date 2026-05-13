import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/lib/auth"

import { NextResponse, NextRequest } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// Handle GET requests (Read)
export async function GET(request: NextRequest) {
  const sessionData = await getServerSession();
  console.log(`session: ${JSON.stringify(sessionData)}`);
  const userEmail = sessionData?.user?.email;
  const user_tasks =
    // @ts-ignore
    await sql`SELECT u.id, u.email, ut.task_name FROM users AS u JOIN user_tasks AS ut ON u.id=ut.user_id WHERE u.email=${userEmail}`;

  console.log("user tasks: ", user_tasks);

  return NextResponse.json(user_tasks);
}
