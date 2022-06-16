import i18n from '@/locales/index'

export const $tm = (key, ...keys) =>  {
    let values = [];
    for (const k of keys) {
      values.push(i18n.global.t(k))
    }
    return i18n.global.t(key, values);
  }

export const $tk = (key) => {
   const hasKey = i18n.global.te(key)
  if (hasKey) {
    return i18n.global.t(key)
  }
  return key
}

export default {
  install(app) {
    app.config.globalProperties.$tm = $tm;
    app.config.globalProperties.$tk = $tk;
  }
}
