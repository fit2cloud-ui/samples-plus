import {post} from "@/utils/request"

export function saveLicense(data) {
  return post("/samples/license/save", data)
}


