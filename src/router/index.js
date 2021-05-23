import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Profile Information',
    path: '/profile-info',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "profile-info" */ '@/views/MenuTabs/ProfileInfo.vue')
  },
  {
    name: 'Users',
    path: '/users',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "users" */ '@/views/MenuTabs/UsersInfo.vue')
  },
  {
    name: 'Catalog products',
    path: '/catalog-products',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "catalog-products" */ '@/views/MenuTabs/CatalogProducts.vue')
  },
  {
    name: 'Statistics',
    path: '/statistics',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "statistics" */ '@/views/MenuTabs/StatisticData.vue')
  },
  {
    name: 'Exchange Rates',
    path: '/exchange-rates',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "exchange-rates" */ '@/views/MenuTabs/ExchangeRates.vue')
  },
  {
    name: 'Weather',
    path: '/weather',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "weather" */ '@/views/MenuTabs/WeatherData.vue')
  },
  {
    name: 'To do list',
    path: '/to-do-list',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "to-do-list" */ '@/views/MenuTabs/ToDoList.vue')
  }
]

const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router