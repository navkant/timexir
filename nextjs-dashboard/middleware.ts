// middleware.ts
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware called");

  // Example: Redirect if not logged in
  const session_id = request.cookies.get("session_id");
  if (!session_id && request.nextUrl.pathname.startsWith("/timexir")) {
    console.log("session_id not found");
    console.log(new URL("/", request.url));
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Config to specify which routes should trigger this middleware
export const config = {
  matcher: "/:path*",
};
