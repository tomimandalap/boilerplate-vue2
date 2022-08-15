<template>
  <div class="browser_support" :style="styleS">
    <v-card class="container-card">
      <v-icon size="60" color="info">mdi-information-outline</v-icon>
      <p>
        Browser yang anda gunakan tidak mendukung. Silahkan gunakan browser
        <strong>Chrome atau Safari.</strong>
      </p>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'browserSupport',
  data() {
    return {
      image: 'browsersupport.png',
    }
  },
  computed: {
    styleS() {
      return {
        backgroundImage: `url(${require('@/assets/images/' + this.image)})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.browser_support {
  background: #e0f7ef;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  & .container-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    padding: 16px;
    background: white;
    border-radius: none;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    color: black;
    font-size: 14px;
  }

  & p strong {
    color: red;
  }
}
</style>
