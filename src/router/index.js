import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Sign-In.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/Sign-Up.vue')
  },
  {
    path: '/admin/reset-password',
    name: 'reset-password',
    component: () => import('@/views/ResetPassword.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue')
  }
]

const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router