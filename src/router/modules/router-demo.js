import Layout from "@/business/app-layout/horizontal-layout/index.vue";

export default {
  sort: 1,
  path: "/router-demo",
  component: Layout,
  name: "RouterDemo",
  meta: {
    title: "route.router_demo",
    icon: "Share"
  },
  children: [
    {
      path: "docs",
      component: () => import("@/business/router-demo/RouterDocs.vue"),
      name: "RouterDocs",
      meta: {
        title: "官方文档",
      }
    },
    {
      path: "menu",
      component: () => import("@/business/router-demo/RouterMenu.vue"),
      name: "RouterMenu",
      meta: {
        title: "route.router_menu",
      }
    },
    {
      path: "detail",
      component: () => import("@/business/router-demo/RouterDetail.vue"),
      name: "RouterDetail",
      meta: {
        activeMenu: "/router-demo/menu",
        hidden: true,
      }
    },
    {
      path: "keep-alive",
      component: () => import("@/business/router-demo/RouterKeepAlive.vue"),
      name: "RouterKeepAlive",
      meta: {
        title: "route.router_keep_alive",
      }
    },
    {
      path: "keep-alive-detail",
      component: () => import("@/business/router-demo/RouterKeepAliveDetail.vue"),
      name: "RouterKeepAliveDetail", // cache: true时，必须保证name与component中的name一致
      meta: {
        cache: true,
        activeMenu: "/router-demo/menu",
        hidden: true,
      }
    },
  ]
}
