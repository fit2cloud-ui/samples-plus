import elementEnLocale from 'element-plus/lib/locale/lang/en'
import fit2cloudEnLocale from "fit2cloud-ui-plus/src/locale/lang/en"; // 加载fit2cloud的内容
const message = {
  commons: {
    home: "Home",
    message_box: {
      alert: "warning",
      confirm: "Confirm",
      prompt: "Prompt",
    },
    button: {
      login: "Login",
      ok: "OK",
      save: "Save",
      delete: "Delete",
      cancel: "Cancel",
      return: "return",
    },
    msg: {
      success: "{0}success",
      op_success: "Operation succeeded",
      save_success: "Save successfully",
      delete_success: "Delete successful",
    },
    validate: {
      limit: 'Length from {0} to {1} characters',
      input: "Please enter {0}",
      select: "Please select {0}",
    },
    personal: {
      personal_information: "Personal Information",
      help_documentation: "Help Documentation",
      exit_system: "Exit the system",
    }
  },
  login: {
    username: "Username",
    password: "Password",
    title: "Login to FIT2CLOUD",
    welcome: "Welcome back, please enter your username and password to log in",
    expires: 'The authentication information has expired, please log in again',
  },
  route: {
    router_demo: "Route Example",
    router_menu: "Route and Menu",
    router_keep_alive: "Component cache",
    components: "Components",
    complex_table: "Compound table",
    layout_content: "Page Layout",
    system_setting: "System Settings",
    user_management: "User Management",
    params_setting: "Parameter Settings",
  },

}

export default {
  ...elementEnLocale,
  ...fit2cloudEnLocale,
  ...message
};
