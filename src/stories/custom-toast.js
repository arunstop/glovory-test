import Vue from 'vue'
import {ToastPlugin} from 'bootstrap-vue'


//   ---------Arrow Function Break Down---------
//   function (a){
//     return a + 100;
//   }

//   ---------Arrow Function Break Down---------

//   -----1. Remove the word "function" and place arrow between the argument and opening body bracket
//   (a) => {
//     return a + 100;
//   }

//   -----2. Remove the body brackets and word "return" -- the return is implied.
//   (a) => a + 100;

//   -----3. Remove the argument parentheses
//   a => a + 100;
Vue.use(ToastPlugin)



export default () => {
    this.$bvToast.toast('Toast body content', {
        title: 'Toast test',
        variant: 'succes',
        solid: true
      })

}