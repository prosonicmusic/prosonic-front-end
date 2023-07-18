import axios from "axios";
import http from "./httpService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export function login(signinValues) {
  return axios.post(`${baseUrl}/login`, signinValues);
}

export function register(signupValues) {
  return axios.post(`${baseUrl}/user/register`, signupValues);
}

export function changePassword(body) {
  return axios.put(`${baseUrl}/user/password/update`, body);
}

export function changePasswordOTP(body) {
  return axios.post(`${baseUrl}/user/verification/send`, body);
}

export function registerOTP(body) {
  return axios.post(`${baseUrl}/user/verification/send`, body);
}

export function getUser() {
  return http.get(`${baseUrl}/user/get`).then(({ data }) => data.data);
}

export function userInfo(body) {
  return http.put(`${baseUrl}/user/update`, body);
}

export function changeAvatar(formData) {
  return http.put(`${baseUrl}/user/avatar`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
