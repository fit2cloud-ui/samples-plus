import Layout from "@/business/app-layout/horizontal-layout/index.vue";

const Error = {
  path: '/error',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ErrorPages',
  meta: {
    title: 'Error Pages',
    icon: 'Opportunity'
  },
  children: [{
      path: 'error1',
      component: () => import('@/business/error-page/error1.vue'),
      name: 'error1',
      meta: {
        title: 'error1',
        cache: true
      }
    },
    {
      path: 'error2',
      component: () => import('@/business/error-page/error2.vue'),
      name: 'error2',
      meta: {
        title: 'error2',
        cache: true
      }
    },
    {
      path: 'error3',
      component: () => import('@/business/error-page/error3.vue'),
      name: 'error3',
      meta: {
        title: 'error3',
        cache: true
      }
    },
    {
      path: 'error4',
      component: () => import('@/business/error-page/error4.vue'),
      name: 'error4',
      meta: {
        title: 'error4',
        cache: true
      }
    }
  ]
}
export default Error
