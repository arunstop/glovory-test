import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'

import Vuex from 'vuex';
import store from './store'
import globals from './stories/globals';
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { longClickDirective } from 'vue-long-click'
import Vue2Storage from 'vue2-storage'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
Vue.use(Vue2Storage, {
  prefix: 'app_',
  driver: 'local',
  ttl: 60 * 60 * 24 * 1000 // 24 hours
})


Vue.directive('long-click', longClickDirective({ delay: 600, interval: 120 }))

// reauthenticate user if local user data exists
var localUserData = Vue.$storage.get('userData', null)
if (localUserData != null) {
  store.dispatch("userSignIn", localUserData);
}

// add cart data if it exists in local storage
var localCartData = Vue.$storage.has('cartData')

if (localCartData) {
  // Adding cart data from local storage
  // console.log(Vue.$storage.get('cartData').data)
  let cartData = Vue.$storage.get('cartData').data
  cartData.map(
    item => store.dispatch('addToCart', item)
  )
  // console.log(store.getters.getCartData)
}

const vm = new Vue({
  render: h => h(App),
  router,
  //store is for reactive variables
  store,
})

//global is for statics variables
Vue.prototype.$globals = new globals(vm)

vm.$mount('#app')
