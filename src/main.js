import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex';
import storage from './storage/storage'
// import globalUi from './stories/global-ui';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
Vue.prototype.$appName = 'My App'

new Vue({
  render: h => h(App),
  store: storage,
}).
$mount('#app')
