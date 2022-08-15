module.exports = {
  devServer: {
    proxy: `${process.env.VUE_APP_BASE_PROXY}`,
  },

  transpileDependencies: [
    'vuetify'
  ]
}
