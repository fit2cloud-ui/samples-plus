import { defineStore } from 'pinia';
import { login, isLogin, getCurrentUser, updateInfo, logout } from '@/api/user'
import { resetRouter } from '@/router'

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    login: false,
    name: "",
    // language: getLanguage(),
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

    fetchIsLogin() {
      return new Promise((resolve) => {
        if (this.login) {
          resolve(true)
          return;
        }
        isLogin().then(() => {
          console.log(this.login)
          this.login = true;
          resolve(true)
        }).catch(() => {
          resolve(false)
        })
      });
    },
    fetchGetCurrentUser() {
      return new Promise((resolve, reject) => {
        getCurrentUser().then(({ data }) => {
          const {name, roles, language} = data
          this.name = name
          this.roles = roles
          // this.language = language
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      });
    },

  // setLanguage({commit, state}, language) {
  //   commit('SET_LANGUAGE', language)
  //   return new Promise((resolve, reject) => {
  //     updateInfo(state.id, {language: language}).then(response => {
  //       resolve(response)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  fetchLogout() {
      logout().then(() => {
        this.login = false
        this.roles = []
        resetRouter()
      })
    },
  }
});

export default useUserStore;
