import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    // dark: false,
    themes: {
      light: {
        primary: '#1391C4',
        secondary: '#E1E3FA',
        error: '#ff0000',
        info: '#E0F7EF',
        success: '#55CB95',
        warning: '#ff8200',
        accent: '#82B1FF',
      },
      dark: {},
    },
  },
})
