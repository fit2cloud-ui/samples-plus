import {post} from "@/utils/request"

export function saveLicense(data) {
  return post("/api/license/save", data)
}


