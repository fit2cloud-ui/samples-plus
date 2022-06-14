import { createI18n } from 'vue-i18n'

export function loadLanguages() {
  const context = import.meta.globEager("./lang/*.js");
  const languages = {};
  let langs = Object.keys(context);
  for (let key of langs) {
      let lang = context[key].default;
      let name = key.replace(/(\.\/lang\/|\.js)/g, '');
      languages[name] = lang
  }
  
  return languages
}

export const getLocale = () => {
  const cookieLanguage = localStorage.getItem('language')
  if (cookieLanguage) {
    return cookieLanguage
  }
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(loadLanguages())
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  // Default language is zh-cn
  return 'zh-cn'
}

const i18n = createI18n({
  locale: getLocale(),
  messages: loadLanguages()
})

export default i18n
// // 组合翻译，例如key为'请输入{0}'，keys为login.username，则自动将keys翻译并替换到{0} {1}...
// Vue.prototype.$tm = function (key, ...keys) {
//   let values = [];
//   for (const k of keys) {
//     values.push(i18n.t(k))
//   }
//   return i18n.t(key, values);
// };

// // 忽略警告，即：不存在Key直接返回Key
// Vue.prototype.$tk = function (key) {
//   const hasKey = i18n.te(key)
//   if (hasKey) {
//     return i18n.t(key)
//   }
//   return key
// };

