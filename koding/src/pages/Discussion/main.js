import { createApp } from 'vue'
import DiscussionView from './DiscussionView.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()

createApp(DiscussionView)
  .use(vuetify)
  .mount('#app')
