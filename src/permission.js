import router from "@/router"
import useStore from '@/store';
import NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({showSpinner: false}) // NProgress Configuration

const whiteList = ["/login"] // no redirect whitelist

const generateRoutes = async (to, from, next) => {
  const { user, permission } = useStore();
  const hasRoles = user.roles && user.roles.length > 0
  if (hasRoles) {
    next();
  } else {
    try {
      const {roles} = await user.getCurrentUser()
      const accessRoutes = await permission.generateRoutes(roles);
      accessRoutes.forEach((route) => {
        router.addRoute(route);
      });

      next({...to, replace: true})
    } catch (error) {
      console.log(error)
      await user.logout()
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
}

// 路由前置钩子，根据实际需求修改
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const { user } = useStore();
  const isLogin = await user.isLogin() // 或者userToken.isLogin()

  if (isLogin) {
    if (to.path === "/login") {
      next({path: "/"})
      NProgress.done()
    } else {
      await generateRoutes(to, from, next)
    }
  } else {
    /* has not login*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
