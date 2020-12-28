import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex';
import storage from './storage'
import globals from './stories/globals';
import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

if (storage.getters.isSignedIn === true) {
  var newUserData = {
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password'),
    latestSession: localStorage.getItem('latestSession'),
  };
  storage.dispatch("userSignIn", newUserData);
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
