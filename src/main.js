import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import VueMaterial from 'vue-material'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueNativeSock, 'ws://159.89.15.214:8080/', {
  store,
  format: 'json',
  reconnection: true,
  // (Number) number of reconnection attempts before giving up (Infinity)
  reconnectionAttempts: 10,
  // (Number) how long to initially wait before attempting a new (1000)
  reconnectionDelay: 500,
})

Vue.use(VueMaterial)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
