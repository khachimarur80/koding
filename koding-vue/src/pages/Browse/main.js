import { createApp } from 'vue'
import BrowseView from './BrowseView.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()

createApp(BrowseView)
  .use(vuetify)
  .mount('#app')
