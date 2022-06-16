import { createI18n } from 'vue-i18n/index'

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


