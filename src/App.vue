<template>
  <v-app>
    <v-main>
      <template v-if="support">
        <browserSupport />
      </template>
      <router-view v-else />
    </v-main>
  </v-app>
</template>
<script>
import browserSupport from '@/components/BowserSupport'
export default {
  name: 'App',
  components: { browserSupport },
  data() {
    return {
      support: false,
      online: true,
    }
  },
  computed: {
    browser() {
      const { isChrome, isChromeIOS, isIOS, isSafari } = this.$browserDetect
      return [isChrome, isChromeIOS, isIOS, isSafari].includes(true)
    },
  },
  mounted() {
    this.checkBrowser()
  },
  updated() {
    this.checkBrowser()
  },
  methods: {
    checkBrowser() {
      // if not support when else support browser
      if ([this.browser].includes(false)) this.support = true
      else this.support = false
    },
    amIOnline(e) {
      this.online = e
    },
  },
}
</script>
