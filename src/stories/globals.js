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
  props:{
    appName : "Mobile Suit Gundam: Char's Counterattack",
    apiKey1 : "",
    apiKey2 : ""

  },
  ui: {
    showToast(msg) {
      // alert('success');
      vueInstance.$bvToast.toast(msg, {
        title: "Notification",
        variant: "success",
        solid: true,
        noHoverPause: true,
        autoHideDelay: 1200,
        append: false,
      })
    },
    showModal(msg, okVariant, okAction, cancelAction){
      vueInstance.$bvModal.msgBoxConfirm(msg, {
        title: 'Confirmation',
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
//     variant: 'succes',
//     solid: true
//   })

// }