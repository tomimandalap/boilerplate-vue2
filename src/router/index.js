import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutDasboard from '../layouts/dasboard.vue'
import LayoutDefault from '../layouts/default.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/index'),
        meta: { auth: false },
      },
      {
        path: '404',
        name: '404 Not Found',
        component: () => import('@/views/404'),
        meta: { auth: false },
      },
    ],
  },
  {
    path: '/admin',
    component: LayoutDasboard,
    children: [
      {
        path: '',
        name: 'Admin',
        component: () => import('@/views/admin/index'),
        meta: { auth: true },
      },
    ],
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next('/404')
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // const { path, meta } = to
  // const isAuth = meta.auth || false
  // // get path url
  // const urlMobile = path.includes('/mobile')
  // const urlAdmin = path.includes('/admin')
  // const urlLogin = path.includes('/login')
  // // get data from localstorage
  // const isMobileToken = localStorage.getItem('mobile_token')
  // const isAdminToken = localStorage.getItem('admin_token')
  // const isAccess = localStorage.getItem('access')

  window.scrollTo(0, 0)
  next()

  // // checking auth perpage
  // if (isAuth) {
  //   if (urlMobile) {
  //     if (isMobileToken) next()
  //     else router.push('/login').catch(() => {})
  //   } else if (urlAdmin) {
  //     if (isAdminToken) next()
  //     else router.push('/login').catch(() => {})
  //   }
  // } else {
  //   if (urlLogin) {
  //     if (isMobileToken) router.push('/mobile').catch(() => {})
  //     else if (isAccess && isAdminToken) router.push('/admin').catch(() => {})
  //     else next()
  //   } else next()
  // }
})

router.afterEach((to) => {
  const DEFAULT_TITLE = process.env.VUE_APP_NAME
  Vue.nextTick(() => {
    document.title = DEFAULT_TITLE + ' | ' + to.name || DEFAULT_TITLE
  })
})

export default router
