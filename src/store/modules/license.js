import { saveLicense } from "@/api/license"
import { defineStore } from 'pinia';

const LicenseKey = "X-License";
const Status = {
  valid: "valid",
  invalid: "invalid",
  expired: "expired",
}

const get = () => {
  return localStorage.getItem(LicenseKey)
}
const set = value => {
  localStorage.setItem(LicenseKey, value)
}
const useLicenseStore = defineStore({
  id: 'license',
  state: () => ({
    status: get(),
    license: {},
    message: ""
  }),
  actions: {
    saveLicense(content) {
      return new Promise((resolve, reject) => {
        saveLicense({ license: content }).then(({data}) => {
          const { status, license, message } = data;
          this.status= status
          this.license = license
          this.message = message
          resolve(status)
        }).catch(error => {
          this.status = Status.invalid
          reject(error)
        })
      })
    },
    isValid() {
      return this.status === Status.valid
    },
    isExpired() {
      return this.status === Status.expired
    }
  }
});

export default useLicenseStore;
