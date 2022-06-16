import { createRouter, createWebHashHistory } from 'vue-router';
// import useStore from '@/store';

const modules = import.meta.globEager('./modules/*.js')

export const Layout = () => import('@/business/app-layout/horizontal-layout/index.vue');

// 参数说明: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
// 静态路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true
    },
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
    meta: {
      hidden: true
    }
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
        meta: { title: 'dashboard', icon: 'TrendCharts', affix: true }
      }
    ]
  }

];
/**
 * 用户登录后根据角色加载的路由
 */
 export const rolesRoutes = [
  // 先按sort排序
  ...Object.keys(modules).map(key => modules[key].default).sort((r1, r2) => {
    r1.sort ??= Number.MAX_VALUE
    r2.sort ??= Number.MAX_VALUE
    return r1.sort - r2.sort
  })
]

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
    if (name && router.hasRoute(name)) {
      router.removeRoute(name);
    }
  });
}

export default router;
