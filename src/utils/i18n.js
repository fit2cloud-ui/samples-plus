import i18n from '@/locales/index'

// 组合翻译，例如key为'请输入{0}'，keys为login.username，则自动将keys翻译并替换到{0} {1}...
export const $tm = (key, ...keys) => {
  let values = [];
  for (const k of keys) {
    values.push(i18n.global.t(k))
  }
  return i18n.global.t(key, values);
}

// 忽略警告，即：不存在Key直接返回Key
export const $tk = (key) => {
  const hasKey = i18n.global.te(key)
  if (hasKey) {
    return i18n.global.t(key)
  }
  return key
}

export const $t = (key, value) => {
  return i18n.global.t(key, value)
}

// export default {
//   install(app) {
//     app.config.globalProperties.$tm = $tm;
//     app.config.globalProperties.$tk = $tk;
//   }
// }
