import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)
Vue.use(VueRouter)

import start from './start.vue'
import rodrigolosQuest from './rodrigolosQuest.vue'
import AntarcticQuest from './AntarcticQuest.vue'
import cryptocurrencies from './cryptocurrencies.vue'
 
const router = new VueRouter({
    routes: [
      { path: '/', component: start },
      { path: '/start', component: start },
      { path: '/rodrigolosQuest', component: rodrigolosQuest },
      { path: '/AntarcticQuest', component: AntarcticQuest },
      { path: '/cryptocurrencies', component: cryptocurrencies }
    ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
