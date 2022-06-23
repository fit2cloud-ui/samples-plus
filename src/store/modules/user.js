import { defineStore } from 'pinia';
import { login, isLogin, getCurrentUser, updateInfo, logout } from '@/api/user'
import { resetRouter } from '@/router'
import { getLanguage, setLanguage } from "@/locales";

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    login: false,
    name: "",
    language: getLanguage(),
    roles: []
  }),
  actions: {
    userLogin(userInfo) {
      const {username, password} = userInfo
      return new Promise((resolve, reject) => {
        login({username: username.trim(), password: password})
          .then(response => {
            this.login = true;
            resolve(response)
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    getIsLogin() {
      return new Promise((resolve) => {
        if (this.login) {
          resolve(true)
          return;
        }
        isLogin().then(() => {
          this.login = true;
          resolve(true)
        }).catch(() => {
          resolve(false)
        })
      });
    },
    getCurrentUser() {
      return new Promise((resolve, reject) => {
        getCurrentUser().then(({ data }) => {
          const {name, roles, language} = data
          this.name = name
          this.roles = roles
          this.language = language
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      });
    },

    userSetLanguage(language) {
      this.language = language
      setLanguage(language)
      return new Promise((resolve, reject) => {
        updateInfo( {language: language}).then(response => {
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

export default useUserStore;
