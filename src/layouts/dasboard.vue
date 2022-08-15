<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-toolbar-title>Dasboard</v-toolbar-title> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item class="px-2 py-1">
        <v-list-item-avatar>
          <v-img :src="require('@/assets/images/logo.png')"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="font-weight-bold">Dasboard</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click.stop="$router.push('/')">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="LayoutDefault__main pa-4">
      <notifications position="top right" class="mt-5 mr-2" />
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'layoutDasboard',
  data() {
    return {
      drawer: true,
      mini: true,
    }
  },
}
</script>
