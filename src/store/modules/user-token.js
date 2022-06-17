import { defineStore } from 'pinia';
import { login, getCurrentUser, updateInfo, logout } from '@/api/user-token'
import { resetRouter } from '@/router'
import { getToken, setToken, removeToken } from '@/utils/token'
import { getLanguage, setLanguage } from "@/locales";

/* 前后端不分离的登录办法*/

const useUserTokenStore = defineStore({
  id: 'userToken',
  state: () => ({
    token: getToken(),
    name: "",
    language: getLanguage(),
    roles: []
  }),
  actions: {
    userLogin(userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password }).then(response => {
          let token = response.data
          this.token = token
          setToken(token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    isLogin() {
      return new Promise((resolve, reject) => {
        let token = getToken()
        if (token) {
          this.token = token
          resolve(true)
        } else {
          reject(false)
        }
      }).catch(() => {});
    },
  
    getCurrentUser() {
      return new Promise((resolve, reject) => {
        getCurrentUser().then(({data}) => {
          const { name, roles, language } = data
          this.name = name
          this.roles = roles
          this.language = language
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      });
    },
  
    setLanguage(language) {
      this.language = language
      setLanguage(language)
      return new Promise((resolve, reject) => {
        updateInfo({language: language}).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  
    userLogout() {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          this.login = false
          this.roles = []
          resetRouter()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
});

export default useUserTokenStore;

