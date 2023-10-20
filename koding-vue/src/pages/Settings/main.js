import { createApp } from 'vue'
import SettingsView from './SettingsView.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()

createApp(SettingsView)
  .use(vuetify)
  .mount('#app')
