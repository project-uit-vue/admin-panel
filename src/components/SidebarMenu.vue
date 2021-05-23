<template>
  <div>
    <v-navigation-drawer
      app
      permanent
      class="sidebar-menu"
      :mini-variant="currentSize"
      :width="300"
    >
      <v-list-item v-if="!currentSize">
        <v-list-item-content>
          <v-list class="text-center" color="grey lighten-3">
            <v-list-item-title class="title">
              Admin panel
            </v-list-item-title>
            <v-list-item-subtitle>
              training project
            </v-list-item-subtitle>
          </v-list>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item-group
          v-model="selectedItem"
          color="grey darken-1"
          mandatory
        >
          <v-list-item
            link
            v-for="(item, index) in menuTabs"
            :key="index"
            @click="toRouteTab(item.route)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    menuTabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedItem: 1,
      show: false
    }
  },
  computed: {
    currentSize() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  methods: {
    toRouteTab(currentRoute) {
      this.$route.path !== currentRoute && this.$router.push(currentRoute)
    }
  }
}
</script>

<style lang="scss">
.sidebar-menu {
  .v-list {
    .v-list-item {
      .v-list-item__content {
        .v-list-item__title {
          font-size: 18px;
          text-transform: uppercase;
        }
      }
    }
  }
  .v-list--nav .v-list-item {
    padding: 8px 8px;
  }
}
</style>
