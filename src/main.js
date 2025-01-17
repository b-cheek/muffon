import {
  createApp
} from 'vue'
import '../semantic/dist/semantic.min.js'
import '../semantic/dist/semantic.min.css'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/assets/styles/Main.sass'
import '@/assets/styles/Sources.sass'
import App from './App.vue'
import router from '@/plugins/router'
import pinia from '@/plugins/pinia'
import i18n from '#/plugins/i18n'
import setupAxios from '@/plugins/axios'
import setupI18nCountries from '@/plugins/i18nCountries'

createApp(
  App
).use(
  router
).use(
  pinia
).use(
  i18n
).mount(
  '#app'
)

setupAxios()

setupI18nCountries()
