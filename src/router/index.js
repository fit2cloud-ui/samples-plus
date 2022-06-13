import { createRouter, createWebHashHistory } from 'vue-router';
// import useStore from '@/store';

export const Layout = () => import('@/business/app-layout/horizontal-layout/index.vue');

// 参数说明: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
// 静态路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/components/redirect/index.vue')
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/business/login/index.vue"),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/business/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'homepage', affix: true }
      }
    ]
  }

];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// 重置路由
export function resetRouter() {
  router.getRoutes().forEach(route => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export default router;
