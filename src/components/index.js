/* Components */
import ComplexTable from "./complex-table/index.vue";
import LayoutContent from "./layout/LayoutContent.vue";

export default {
  install(app) {
    app.component(ComplexTable.name, ComplexTable);
    app.component(LayoutContent.name, LayoutContent);
  },
};
