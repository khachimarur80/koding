import { createApp } from 'vue'
import AccountView from './AccountView.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()

createApp(AccountView)
  .use(vuetify)
  .mount('#app')
