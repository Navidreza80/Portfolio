import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getServerCookie } from "./helper/server-cookie";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin")) {
    const userId = await getServerCookie("userId");

    if (typeof userId !== "string") {
      return NextResponse.redirect(new URL("/login/admin", req.url));
    }

    try {
      const res = await fetch(`http://localhost:3000/api/user/${userId}`);
      if (!res.ok) {
        return NextResponse.redirect(new URL("/login/admin", req.url));
      }

      const user = await res.json();

      if (!user || user.role !== "admin") {
        return NextResponse.redirect(new URL("/login/admin", req.url));
      }
    } catch (error) {
      console.error("Middleware error:", error);
      return NextResponse.redirect(new URL("/login/admin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
