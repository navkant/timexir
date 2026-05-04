// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware called");

  // Example: Redirect if not logged in
  const session = request.cookies.get("state");
  if (!session && request.nextUrl.pathname.startsWith("/timexir")) {
    console.log("session not found");
    console.log(new URL("/", request.url));
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

// Config to specify which routes should trigger this middleware
export const config = {
  matcher: "/:path*",
};
