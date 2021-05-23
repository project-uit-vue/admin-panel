<template>
  <div>
    <SidebarMenu :menuTabs="menuTabs" />
    <AppBarMenu :pageTitle="menuTabs" />
    <v-main>
      <slot></slot>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    SidebarMenu: () => import('@/components/SidebarMenu.vue'),
    AppBarMenu: () => import('@/components/AppBarMenu.vue')
  },
  data() {
    return {
      menuTabs: [
        {
          title: 'Profile Information',
          icon: 'mdi-account',
          route: '/profile-info'
        },
        {
          title: 'Users',
          icon: 'mdi-account-multiple',
          route: '/users'
        },
        {
          title: 'Catalog products',
          icon: 'mdi-table-large',
          route: '/catalog-products'
        },
        {
          title: 'Statistics',
          icon: 'mdi-chart-line',
          route: '/statistics'
        },
        {
          title: 'Exchange Rates',
          icon: 'mdi-account-cash-outline',
          route: '/exchange-rates'
        },
        {
          title: 'Weather',
          icon: 'mdi-weather-cloudy',
          route: '/weather'
        },
        {
          title: 'To do list',
          icon: 'mdi-clipboard-list-outline',
          route: '/to-do-list'
        }
      ]
    }
  }
}
</script>
