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

const globalUi = vueInstance => ({
  methods: {
    showToast(msg) {
      // alert('success');
      vueInstance.$bvToast.toast(msg, {
        title: "Notification",
        variant: "danger",
        solid: true,
        hoHoverPause: true,
        autoHideDelay: 1200,
        append: false
      })
    }
  }
}) 

export default globalUi;


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