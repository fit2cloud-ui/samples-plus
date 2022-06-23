import Layout from "@/business/app-layout/horizontal-layout/index.vue";

const Directive = {
  path: "/directive",
  component: Layout,
  name: "Directive",
  meta: {
    title: "指令",
    icon: "Cpu",
  },
  children: [
    {
      path: "click-outside",
      component: () => import("@/business/directive/ClickOutsideDemo.vue"),
      name: "ClickOutside",
      meta: {
        title: "点击外部指令"
      }
    },
    {
      path: "permission",
      component: () => import("@/business/directive/PermissionDemo.vue"),
      name: "Permission",
      meta: {
        title: "权限指令"
      }
    }
  ]
}
export default Directive
