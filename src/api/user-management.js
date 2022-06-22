import {get} from "@/utils/request";

export function listUsers(page, size) {
  return get(`/api/user-management/list`, {
    page: page,
    size: size,
  })
}
