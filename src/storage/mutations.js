export default {
    PRODUCT_SEARCH(state, query) {
        state.productSearchQuery = query
        // console.log(query)
    },
    CART_ADD(state, id) {
        let itemList = state.userData.cartData
        if (itemList.length === 0) {
            itemList.push({ productId: id, qty: 0 })
        } else {
            // checking if productId already exists
            // then product will not be added to cart
            // -------------------------------------
            // The .some() method tests whether at least one element in the 
            // array passes the test implemented by the provided function. 
            // It returns a Boolean value
            if (!itemList.some(a => a.productId===id)) {
                // alert('no duplicates')
                itemList.push({ productId: id, qty: 0 })
            }
        }
    },
    CART_REMOVE(state, id) {
        let itemList = state.userData.cartData
        state.userDate.cartData = itemList.filter(a => a.productId != id)
    },
    CART_EMPTY(state) {
        state.userData.cartData = []
    },
    USER_SIGN_IN(state, newUserData) {
        state.userData = newUserData
        localStorage.setItem('email', newUserData.email)
        localStorage.setItem('password', newUserData.password)
        localStorage.setItem('latestSession', newUserData.latestSession)
    },
    USER_SIGN_OUT(state) {
        state.userData = {}
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        localStorage.removeItem('latestSession')
    }

}