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

// console.log(Vue.prototype)

// export default class {
//   vueInstance = null;

//   constructor(vueInstance){
//     this.vueInstance=vueInstance
//   }


//   showToast(){
//     // alert('success');
//     this.vueInstance.$bvToast.toast("Cart has been emptied", {
//       title: "Notification",
//       variant: "danger",
//       solid: true,
//       hoHoverPause: true,
//       autoHideDelay: 1200,
//       append: false
//     })
//   }
// }

const _default = (vueInstance) => ({
  //getting vue instance from main.js
  //then using it like injection $['injectionname]
  props:{
    appName : "Glovorymart",
    apiKey1 : "",
    apiKey2 : "",
    logoUrl : "https://assets.website-files.com/5fafb178b3236f251c2ec605/5fafe519c3163b6fd26dd449_logo-color.svg",
    //import json can be using :
    // 1. require('example.json')
    // OR
    // 2. import Example from 'example.json' at the start of the file
    productDummy : require("../assets/products.json"),
    userData : {}
  },
  ui: {
    showToast(message, opt) {
      // alert('success');
      vueInstance.$bvToast.toast(message, {
        title: "Notification",
        toaster: 'b-toaster-bottom-center',
        variant: opt.variant,
        solid: true,
        noHoverPause: false,
        autoHideDelay: 1200,
        append: false,
      })
    },
    showModal(title = 'Confirmation', message = 'Are you sure?', okVariant = 'success', okAction, cancelAction){
      vueInstance.$bvModal.msgBoxConfirm(message, {
        title: title,
        size: 'md',
        buttonSize: 'md',
        okVariant: okVariant,
        cancelVariant: 'outline-dark',
        headerClass: 'p-2 border-bottom-1 d-flex justify-content-center',
        footerClass: 'p-2 border-top-1',
        centered: true
      })
        .then((ok)=> {
          if (ok){
            okAction()
            // alert('ok')
          }else{
            cancelAction()
            // alert('cancel')
          }
        })
        .catch(() => {
          // alert('cancel')
        })
    }
  }
}) 

export default _default;


// export default (vueInstance) => class MyClass {

//   showToast(){
//     console.log(vueInstance)
//     vueInstance.$bvToast.toast("Cart has been emptied", {
//       title: "Notification",
//       variant: "danger",
//       solid: true,
//       hoHoverPause: true,
//       autoHideDelay: 1200,
//       append: false
//     })
//   }
// }



// export default function ({vueInstance}) {


//   var showToast = (message, props) => {

//     vueInstance.$bvToast.toast(message, {
//       title: "Notification",
//       autoHideDelay: 1200,
//       hoHoverPause: true,
//       ...props
//     });
//     // .toast("Cart has been emptied", {
//     //   title: "Notification",
//     //   variant: "success",
//     //   solid: true,
//     //   hoHoverPause: true,
//     //   autoHideDelay: 1200,
//     //   append: false
//     // });
//   }

//   return showToast
// }

// export default () => {
//   this.$bvToast.toast('Toast body content', {
//     title: 'Toast test',
//     variant: 'success',
//     solid: true
//   })

// }