import axios from "axios";
import http from "./httpService";

export function login(signinValues) {
  return axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/login`, signinValues);
}

export function register(signupValues) {
  return axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/user/register`, signupValues);
}

export function changePassword(body) {
  return axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/user/verification/send`, body);
}

export function registerOTP(body) {
  return axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/user/verification/send`, body);
}
