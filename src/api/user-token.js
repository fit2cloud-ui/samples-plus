/* 前后端分离的登录方式 */
import {get, post, put} from "@/utils/request"

export function login(data) {
  return post("/api/user-token/login", data)
}

export function logout() {
  return post("/api/user-token/logout")
}

export function getCurrentUser() {
  return get("/api/user-token/current")
}

export function updateInfo(data) {
  return put("/api/user-token/update", data)
}



