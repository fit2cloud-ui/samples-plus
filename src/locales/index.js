import {nextTick} from 'vue';
import {createI18n} from 'vue-i18n'

export function loadLanguages() {
  const context = import.meta.globEager('./lang/*.js');
  const languages = {};
  let langs = Object.keys(context);
  for (let key of langs) {
    let lang = context[key].default;
    let name = key.replace(/(\.\/lang\/|\.js)/g, '');
    languages[name] = lang
  }

  return languages
}

export const getLanguage = () => {
  const cookieLanguage = localStorage.getItem('language')
  if (cookieLanguage) {
    return cookieLanguage.toLowerCase()
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
  legacy: false,
  global: true,
  locale: getLanguage(),
  messages: loadLanguages()
})


export async function loadLocaleMessages(locale) {
  // load locale messages with dynamic import
  const messages = await import(`./lang/${locale}.js`)
  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}

export const setLanguage = lang => {
  if (i18n.global.locale !== lang) {
    loadLocaleMessages(lang).then(r => {
      localStorage.setItem('language', lang)
      if (i18n.mode === 'legacy') {
        i18n.global.locale = lang
      } else {
        i18n.global.locale.value = lang
      }
    })
  }
}
export default i18n


