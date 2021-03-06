import { success, error } from "./result-holder"
const TOKEN_KEY = "App-Token"

/* 前后端分离，用Token验证登录*/
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  readonly: {
    token: 'readonly-token'
  }
}

const users = {
  'admin-token': {
    id: "admin",
    name: 'Administrator',
    email: "admin@fit2cloud.com",
    roles: ['admin'],
    language: "zh-cn"
  },
  'editor-token': {
    id: "editor",
    name: 'Editor',
    email: "editor@fit2cloud.com",
    roles: ['editor'],
    language: "zh-cn"
  },
  'readonly-token': {
    id: "readonly",
    name: 'Readonly User',
    email: "readonly@fit2cloud.com",
    roles: ['readonly'],
    language: "zh-cn"
  }
}

export default [
  // user login
  {
    url: '/api/user-token/login',
    method: 'post',
    response: config => {
      const {username} = config.body
      const {token} = tokens[username];

      // mock error
      if (!token) {
        return error("用户名或密码错误")
      }
      return success(token)
    }
  },

  // get user info
  {
    url: '/api/user-token/info',
    method: 'get',
    response: (config) => {
      let token = config.headers[TOKEN_KEY]
      const info = users[token]

      // mock error
      if (!info) {
        return error("无法获取用户[" + token + "]详细信息")
      }

      return success(info)
    }
  },

  // update user info
  {
    url: '/api/user/info/update',
    method: 'put',
    response: config => {
      let token = config.headers[TOKEN_KEY]
      const {language} = config.body
      users[token].language = language;

      return success(users[token])
    }
  },

  // user logout
  {
    url: '/api/user/logout',
    method: 'post',
    response: () => {
      // do something
      return success()
    }
  }
]
