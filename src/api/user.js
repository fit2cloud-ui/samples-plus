/* 前后端不分离的登录方式 */
import {get, post, put} from "@/utils/request"

export function login(data) {
  return post("/api/user/login", data)
}

export function logout() {
  return post("/api/user/logout")
}

export function isLogin() {
  return get("/api/user/is-login")
}

export function getCurrentUser() {
  return get("/api/user/current")
}

export function updateInfo(data) {
  return put("/api/user/info/update", data)
}




