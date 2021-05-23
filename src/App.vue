<template>
  <v-app>
    <component :is="currentLayout">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </component>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {
    MainLayout: () => import('@/components/layout/MainLayout.vue'),
    AuthLayout: () => import('@/components/layout/AuthLayout.vue')
  },
  computed: {
    currentLayout() {
      return `${this.$route.meta.layout || 'main'}-layout`
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
