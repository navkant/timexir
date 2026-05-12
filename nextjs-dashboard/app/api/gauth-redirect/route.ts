import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import postgres from "postgres";
import { v4 as uuidv4 } from "uuid";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const searchParams = request.nextUrl.searchParams;

  const stateFromRequest = cookieStore.get("state")?.value;
  const stateFromAuthResponse = searchParams.get("state");

  if (searchParams.get("error") === "access_denied") {
    return NextResponse.json({ message: "User didnt approved" });
  }

  if (stateFromAuthResponse !== stateFromRequest) {
    return NextResponse.json({ message: "something went wrong" });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GAUTH_CLIENT_ID,
    process.env.GAUTH_CLIENT_SECRET,
    process.env.GAUTH_REDIRECT_URL,
  );

  // @ts-ignore
  const response = await oauth2Client.getToken(searchParams.get("code"));

  // @ts-ignore
  const tokenResponse = response.tokens;

  // @ts-ignore
  const resp = await fetch(process.env.GAUTH_RESOURCE_URL, {
    headers: {
      Authorization: `Bearer ${tokenResponse.access_token}`,
    },
  });
  const userInfo = await resp.json();

  // const jwt_token = jwt.sign(userInfo, process.env.AUTH_SECRET);
  // const session_id = uuidv4();

  // await sql`INSERT INTO users (email, name, password, access_token, session_id, jwt) VALUES
  // (${userInfo.email}, ${userInfo.name}, 'cnruvnrvnrivjnrri', ${tokenResponse.access_token}, ${session_id}, ${jwt_token})`;

  // cookieStore.set("session_id", session_id, { httpOnly: true });

  return redirect("/timexir");
}
