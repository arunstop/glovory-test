import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex';
import storage from './storage'
import globals from './stories/globals';
import router from './router'
import {longClickDirective} from 'vue-long-click'
import 'animate.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
Vue.directive('long-click', longClickDirective({delay:600,interval:120}))

var localUserData = {
  email: localStorage.getItem('email'),
  password: localStorage.getItem('password'),
  latestSession: localStorage.getItem('latestSession'),
};
if (localUserData.email != null) {

  storage.dispatch("userSignIn", localUserData);
}

const vm = new Vue({
  render: h => h(App),
  router,
  //store is for reactive variables
  store: storage,
})

//global is for statics variables
Vue.prototype.$globals = new globals(vm)

vm.$mount('#app')
