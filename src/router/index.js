import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { auth:true, title: 'Home'},
    // component: Home
    component: () => import('../views/Home.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    meta: { auth:true, title: 'Auth'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Auth
    // component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')
  },
  {
    path: '*',
    name: 'notfound',
    meta: { auth:true, title: 'Page Not Found'},
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
