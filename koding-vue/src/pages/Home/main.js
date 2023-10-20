import { createApp } from 'vue'
import HomeView from './HomeView.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()

createApp(HomeView)
  .use(vuetify)
  .mount('#app')
