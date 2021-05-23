<template>
  <v-main>
    <v-app-bar app>
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-clipboard-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
  </v-main>
</template>

<script>
export default {
  name: 'AppBarMenu'
}
</script>

