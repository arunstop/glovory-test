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
    priceLabeling: () => (value = 0) => {
        //minimum fraction digits = zeros after value
        //in this case, making it '0' means removing the zeros
        let currencyProps ={ style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }

        return {
            //based on user's language
            label: value.toLocaleString(undefined, currencyProps),
            //default in indonesian
            // label: value.toLocaleString('id', currencyProps),
            value
        }
    },
    calculateCartTotalPrice: (state, getters) => {
        let cartItems = state.cartData;
        let products = state.productDummy.data
        let itemPrice = cartItems.map(
            a => {
                let productPrice = products.find(product => product.id === a.productId)
                return a.qty * productPrice.price
            }
        )
        let totalPrice = 0
        itemPrice.map(
            price => { return totalPrice += price }
        )
        return getters.priceLabeling(totalPrice)
    },
    calculateCartItemPrice: (state, getters) => (productId) => {
        let cartItems = getters.getCartDataById(productId);
        let products = state.productDummy.data
        let itemPrice = cartItems.map(
            a => {
                let productPrice = products.find(product => product.id === productId)
                return a.qty * productPrice.price
            }
        )
        return getters.priceLabeling(itemPrice[0])
    },
    getCartDataById: (state) => (productId) => {
        return state.cartData.filter(a => a.productId === productId)
    },


}