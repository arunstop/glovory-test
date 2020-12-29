// import globals from '../stories/globals'

export default {
    generateId() {
        return (Math.random().toString(36) + Date.now().toString(36)).substring(2)
    },
    // generateLongId : (state) =>(param) =>  {
    generateLongId: () => (param) => {
        return (Math.random().toString(36) + Date.now().toString(36) + param.toString(36)).substring(2)
    },
    getUserData: (state) => {
        return state.userData;
    },
    isSignedIn: (state) => {
        let email = state.userData.email
        let password = state.userData.password
        let latestSession = state.userData.latestSession
        // console.log(email + ' // ' + password + ' // ' + latestSession)
        if (email != null && password != null && latestSession != null) {
            return true;
        } else {
            return false
        }
    },
    getCartData: (state) => {
        return state.cartData
    },
    priceLabeling(price = 0) {
        return price.toLocaleString('id')
    },
    calculateTotalCart: function (state) {
        let itemList = state.cartData;
        let productList = state.productDummy.data
        let itemPrice = itemList.map(
            a => {
                let productQty = productList.find(product => product.id === a.productId)
                return a.qty * productQty.price
            }
        )
        let totalPrice = 0
        itemPrice.map(
            price => { return totalPrice += price }
        )
        return {
            //based on user's language
            label: totalPrice.toLocaleString(undefined, { style: 'currency', currency: 'IDR' }),
            //default in indonesian
            //label: totalPrice.toLocaleString(undefined, { style: 'currency', currency: 'IDR' }),
            totalPrice
        };
    },
    getCartDataById: (state) => (productId) => {
        return state.cartData.filter(a => a.productId === productId)
    },


}