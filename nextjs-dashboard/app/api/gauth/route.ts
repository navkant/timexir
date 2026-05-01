import { NextResponse } from "next/server";
import { google } from "googleapis";
import crypto from "crypto";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  const oauth2Client = new google.auth.OAuth2(
    process.env.GAUTH_CLIENT_ID,
    process.env.GAUTH_CLIENT_SECRET,
    process.env.GAUTH_REDIRECT_URL,
  );
  const scopes = process.env.GAUTH_SCOPES.split(",");
  const state = crypto.randomBytes(32).toString("hex");

  cookieStore.set("state", state, { httpOnly: true });

  // Generate a url that asks permissions for the Drive activity and Google Calendar scope
  const authorizationUrl = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "offline",
    /** Pass in the scopes array defined above.
     * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
    scope: scopes,
    // Enable incremental authorization. Recommended as a best practice.
    include_granted_scopes: true,
    // Include the state parameter to reduce the risk of CSRF attacks.
    state: state,
  });

  return NextResponse.redirect(authorizationUrl);
}
