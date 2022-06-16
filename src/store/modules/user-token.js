import { defineStore } from 'pinia';
import { login, getCurrentUser, updateInfo, logout } from '@/api/user-token'
import { resetRouter } from '@/router'
import { getToken, setToken, removeToken } from '@/utils/token'
// import { getLanguage, setLanguage } from "@/i18n";

/* 前后端不分离的登录办法*/

const useUserTokenStore = defineStore({
  id: 'userToken',
  state: () => ({
    token: getToken(),
    name: "",
    // language: getLanguage(),
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
  
    fetchIsLogin() {
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
  
    fetchGetCurrentUser() {
      return new Promise((resolve, reject) => {
        getCurrentUser().then(({data}) => {
          const { name, roles, language } = data
          this.name = name
          this.roles = roles
          // this.language = language
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      });
    },
  
    // setLanguage(language) {
    //   this.language = language
    //   return new Promise((resolve, reject) => {
    //     updateInfo(state.id, { language: language }).then(response => {
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
  
    fetchLogout() {
      logout().then(() => {
        this.token = ""
        this.roles = []
        removeToken()
        resetRouter()
      })
    }
  }
});

export default useUserTokenStore;

