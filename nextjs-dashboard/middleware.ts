// middleware.ts
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Example: Redirect if not logged in
  const sessionData = request.cookies.get("__Secure-next-auth.session-token");
  if (!sessionData && request.nextUrl.pathname.startsWith("/timexir")) {
    console.log("session data not found");
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  // console.log(`decoded Data: ${JSON.stringify(sessionData)}`);
}

// Config to specify which routes should trigger this middleware
export const config = {
  matcher: "/:path*",
};
