import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const searchParams = request.nextUrl.searchParams;

  const stateFromRequest = cookieStore.get("state")?.value;
  const stateFromAuthResponse = searchParams.get("state");

  if (searchParams.get("error") === "access_denied") {
    return NextResponse.json({ message: "User didnt approved" });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GAUTH_CLIENT_ID,
    process.env.GAUTH_CLIENT_SECRET,
    process.env.GAUTH_REDIRECT_URL,
  );

  const { tokens: tokenResponse } = await oauth2Client.getToken(
    searchParams.get("code"),
  );

  const resp = await fetch(process.env.GAUTH_RESOURCE_URL, {
    headers: {
      Authorization: `Bearer ${tokenResponse.access_token}`,
    },
  });
  const userInfo = await resp.json();

  return NextResponse.json(userInfo);
}
