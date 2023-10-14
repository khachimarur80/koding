import { createApp } from 'vue'
import CourseView from './CourseView.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

loadFonts()

createApp(CourseView)
  .use(vuetify)
  .mount('#app')
