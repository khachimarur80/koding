import { createApp } from 'vue'
import LoginView from './LoginView.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()

createApp(LoginView)
  .use(vuetify)
  .mount('#app')
