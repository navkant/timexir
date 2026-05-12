import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const cookieName =
    process.env.RUNNING_ENV === "prod"
      ? "__Secure-next-auth.session-token"
      : "next-auth.session-token";

  const sessionData = request.cookies.get(cookieName);

  if (!sessionData && request.nextUrl.pathname.startsWith("/timexir")) {
    console.log("Unauthenticatd request.. redirecting");
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
}

export const config = {
  matcher: "/:path*",
};
