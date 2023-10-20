import { createApp } from 'vue'
import SignupView from './SignupView.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()

createApp(SignupView)
  .use(vuetify)
  .mount('#app')
