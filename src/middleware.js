import { NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/dashboard")) {
    const data = await middlewareAuth(req);
    console.log(data);
    if (!data) return NextResponse.redirect(new URL("/auth", url));
  }

  if (pathname.startsWith("/admin")) {
    const data = await middlewareAuth(req);
    if (!data) return NextResponse.redirect(new URL("/auth", url));
    // if (data && data) return NextResponse.redirect(new URL("/", url)); // if (data && data.role !== 'admin')
  }
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
