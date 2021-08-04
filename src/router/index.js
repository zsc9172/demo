import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { homeRouter } from './home'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/control',
    meta: { title: '' },
    children: [...homeRouter]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: { title: '登录' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  let routeName = to.meta.title || to.name;
  window.document.title = (routeName ? routeName + ' - ' : '') + '核心商城系统';
  let token = sessionStorage.getItem('token');
  if (!token) {

    return next('/login')
  }
  next()
})

export default router
