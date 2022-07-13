import { success } from "./result-holder"
const users = [
  {
    id: "admin",
    name: 'Administrator',
    email: "admin@fit2cloud.com",
    roles: ['admin'],
    language: "zh-cn"
  }, {
    id: "editor",
    name: 'Editor',
    email: "editor@fit2cloud.com",
    roles: ['editor'],
    language: "zh-cn"
  }, {
    id: "readonly",
    name: 'Readonly User',
    email: "readonly@fit2cloud.com",
    roles: ['readonly'],
    language: "zh-cn"
  }
]

for (let i = 0; i < 300; i++) {
  let id = "user-" + i
  let name = id;
  let email = id + "@fit2cloud.com"
  let roles = ['readonly']
  let language = "zh-cn"
  let createTime = new Date().getTime()
  users.push({id, name, email, roles, language, createTime})
}

export default [
  // get user list
  {
    url: '/api/user-management/list',
    method: 'get',
    response: (config) => {
      let page = config.query.page
      let size = config.query.size
      let start = (page - 1) * size
      let end = page * size

      let data = {
        items: users.slice(start, end),
        total: users.length
      }
      return success(data)
    }
  },
]

