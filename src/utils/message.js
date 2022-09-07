import {ElMessageBox, ElMessage} from 'element-plus';
import i18n from "@/locales";

export const $alert = (message, callback, options) => {
  let title = i18n.global.t("commons.message_box.alert");
  return ElMessageBox.alert(message, title, options).then(() => {
    callback();
  });
};

export const $confirm = (message, options = {}) => {
  let defaultOptions = {
    confirmButtonText: i18n.global.t("commons.button.ok"),
    cancelButtonText: i18n.global.t("commons.button.cancel"),
    type: 'warning',
    ...options
  }
  let title = i18n.global.t("commons.message_box.confirm");
  return ElMessageBox.confirm(message, title, defaultOptions)
}

export const $success = (message, duration) => {
  ElMessage.success({
    message: message,
    type: "success",
    showClose: true,
    duration: duration || 1500
  })
}

export const $info = (message, duration) => {
  ElMessage.info({
    message: message,
    type: "info",
    showClose: true,
    duration: duration || 3000
  })
}

export const $warning = (message, duration) => {
  ElMessage.warning({
    message: message,
    type: "warning",
    showClose: true,
    duration: duration || 5000
  })
}

export const $error = (message, duration) => {
  ElMessage.error({
    message: message,
    type: "error",
    showClose: true,
    duration: duration || 10000
  })
}

// export default {
//   install(app) {
//     // 使用$$前缀，避免与Element UI的冲突
//     app.config.globalProperties.$$confirm = $confirm;
//     app.config.globalProperties.$$alert = $alert;

//     app.config.globalProperties.$success = $success;
//     app.config.globalProperties.$info = $info;
//     app.config.globalProperties.$warning = $warning;
//     app.config.globalProperties.$error = $error;
//   }
// }
