import 'intersection-observer'
import Vue from 'vue'
import WebFont from 'webfontloader'
import VueMeta from 'vue-meta'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import router from './router'
import store from './store'
import threeShaderBg from '@/three/threeShaderBg'
import '@/styles/global-styles.js'

Vue.config.productionTip = false

const fonts = [
  'Basis Regular',
  'Basis Medium'
]

WebFont.load({
  custom: {
    families: fonts,
    urls: ['/fonts.css']
  },
  active: () => {}
})

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.use(VueScrollTo, {
  duration: 500,
  easing: 'ease',
  offset: -20,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  created () {
    this.$store.dispatch('GET_API_DATA')
    this.$store.dispatch('GET_TOUCH_STATE')
    this.$store.dispatch('GET_RESIZE_STATE')
    this.$store.dispatch('GET_SCROLL_STATE')
    this.$store.dispatch('GET_USER_AGENT')
    threeShaderBg()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('%c Design & Development: DERPYVISION ', 'color: white; background: #FF90EA;')
console.log('🌎 https://derpy.vision')
