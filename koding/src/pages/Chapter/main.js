import { createApp } from 'vue'
import ChapterView from './ChapterView.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()

createApp(ChapterView)
  .use(vuetify)
  .mount('#app')
