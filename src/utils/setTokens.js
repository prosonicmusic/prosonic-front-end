import { setCookie } from "nookies";

export default function setTokens(access, refresh) {
  if (access) {
    setCookie(null, "accessToken", access, {
      path: "/",
      secure: true,
      sameSite: "strict",
    });
  }

  if (refresh) {
    setCookie(null, "refreshToken", refresh, {
      path: "/",
      secure: true,
      sameSite: "strict",
    });
  }
}
