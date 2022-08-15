<template>
  <v-app>
    <v-main>
      <notifications position="top right" class="mt-5 mr-2" />
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'layoutDefault',
}
</script>
