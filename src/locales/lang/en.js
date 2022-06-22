import elementEnLocale from 'element-plus/lib/locale/lang/en'
import fit2cloudEnLocale from "fit2cloud-ui-plus/src/locale/lang/en"; // 加载fit2cloud的内容
const message = {
  commons: {
    home: "Homepage",
  }
}

export default {
  ...elementEnLocale,
  ...fit2cloudEnLocale,
  ...message
};