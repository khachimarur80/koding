import { createApp } from 'vue'
import CreateView from './CreateView.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()

createApp(CreateView)
  .use(vuetify)
  .mount('#app')
