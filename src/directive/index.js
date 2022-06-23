import { ClickOutside as vClickOutside } from 'element-plus'
import Permission from "./permission";

export default {
  install(app) {
    app.directive('click-outside', vClickOutside);
    app.directive('has-permissions', Permission.hasPermissions);
    app.directive('lack-permissions', Permission.lackPermissions);
  }
}


