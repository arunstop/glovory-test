import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartItem : 6
  },
  mutations:{
    increment(state){
      state.cartItem++
    },
    store_empty_cart(){
      this.cartItem=0
    }
  }
});


new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
