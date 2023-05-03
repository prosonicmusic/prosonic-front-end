const { setCookie } = require("nookies");

export default function setTokens(access, refresh) {
  setCookie(null, "accessToken", access, {
    path: "/",
    secure: true,
    sameSite: "strict",
  });
  setCookie(null, "refreshToken", refresh, {
    path: "/",
    secure: true,
    sameSite: "strict",
  });
}
