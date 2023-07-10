import http from "./httpService";

export function login(signinValues) {
  return http.post("/login", signinValues);
}

export function changePassword(body) {
  return http.post("/user/verification/send", body);
}

export function registerOTP(body) {
  return http.post("/user/verification/send", body);
}
