import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

let defaultTheme = 'dark';

export default createVuetify({
  theme: {
    defaultTheme,
  },
  options: {
    customProperties: true,
  }
});