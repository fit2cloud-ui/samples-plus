import Layout from "@/business/app-layout/horizontal-layout/index.vue";

const ComponentsSetting = {
  sort: 2,
  path: "/components",
  component: Layout,
  name: "Components",
  meta: {
    title: "route.components",
    icon: "Grid",
    roles: ["admin"]
  },
  children: [{
      path: "layout-content",
      component: () => import("@/business/components/LayoutContentDemo.vue"),
      name: "LayoutContentDemo",
      meta: {
        title: "route.layout_content",
      }
    },
    {
      path: "complex-table",
      component: () => import("@/business/components/ComplexTableDemo.vue"),
      name: "ComplexTableDemo",
      meta: {
        title: "route.complex_table",
      }
    },
    {
      path: "form-create",
      component: () => import("@/business/components/CreateFormDemo.vue"),
      name: "CreateFormDemo",
      meta: {
        activeMenu: "/components/complex-table",
        hidden: true,
      }
    },
    // {
    //   path: "form-view",
    //   component: () => import("@/business/components/ViewCardDemo"),
    //   name: "ViewCardDemo",
    //   meta: {
    //     title: "表单示例",
    //   }
    // },
    // {
    //   path: "form-edit",
    //   component: () => import("@/business/components/FormPartDemo"),
    //   name: "FormPartDemo",
    //   hidden: true,
    //   meta: {
    //     activeMenu: "/components/form-view"
    //   }
    // },
    // {
    //   path: "tabs-demo",
    //   component: () => import("@/business/components/DETabsDemo"),
    //   name: "DETabsDemo",
    //   meta: {
    //     title: "DE 标签页",
    //   }
    // },
  ]
}
export default ComponentsSetting
