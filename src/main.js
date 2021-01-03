import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'

// import Vuex from 'vuex';
import store from './store'
import globals from './plugins/globals';
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { longClickDirective } from 'vue-long-click'
// import Vue2Storage from 'vue2-storage'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(Vuex)
// Vue.use(Vue2Storage, {
//   prefix: 'app_',
//   driver: 'local',
//   ttl: 60 * 60 * 24 * 1000 // 24 hours
// })


Vue.directive('long-click', longClickDirective({ delay: 600, interval: 120 }))


const vm = new Vue({
  render: h => h(App),
  router,
  //store is for reactive variables
  store,
})


// re-authenticate user if local user data exists
var localUserData = vm.$storage.get('userData', null)
if (localUserData != null) {
  store.dispatch("userSignIn", localUserData);
}

// add cart data if it exists in local storage
var localCartData =vm.$storage.get('cartData', false)
// console.log(localCartData)

if (localCartData != false) {
  // Adding cart data from local storage
  // console.log(vm.$storage.get('cartData').data)
  let cartData = vm.$storage.get('cartData').data
  cartData.map(
    item => store.dispatch('addToCart', item)
  )
  // console.log(store.getters.getCartData)
}

//global is for statics variables
Vue.prototype.$globals = new globals(vm)
// console.log(vm.$storage.prefix)

vm.$mount('#app')

