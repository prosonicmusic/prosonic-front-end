import { NextResponse } from "next/server";

export async function middleware(req) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
  const url = req.url;
  const pathname = req.nextUrl.pathname;
  const accessToken = req.cookies.get("accessToken")?.value;

  if (pathname.startsWith("/dashboard")) {
    const res = await fetch(`${baseUrl}/user/get`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res.json());

    const { data } = res || {};

    if (!data) return NextResponse.redirect(new URL("/auth", url));
  }

  if (pathname.startsWith("/admin")) {
  }
}

export const config = {
  matcher: ["/admin", "/dashboard/:path*"],
};
