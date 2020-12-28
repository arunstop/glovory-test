export default {
    PRODUCT_SEARCH(state, query) {
        state.productSearchQuery = query
        // console.log(query)
    },
    CART_ADD(state, productId) {
        let itemList = state.userData.cartData
        if (itemList.length === 0) {
            itemList.push({ productId: productId, qty: 1 })
        } else {
            // checking if productId already exists
            // then product will not be added to cart
            // -------------------------------------
            // The .some() method tests whether at least one element in the 
            // array passes the test implemented by the provided function. 
            // It returns a Boolean value
            if (!itemList.some(a => a.productId === productId)) {
                // alert('no duplicates')
                itemList.push({ productId: productId, qty: 1 })
            }
        }
    },
    CART_REMOVE(state, productId) {
        let itemList = state.userData.cartData
        state.userData.cartData = itemList.filter(a => a.productId != productId)
    },
    CART_EMPTY(state) {
        state.userData.cartData = []
    },
    CART_MINUS_ITEM_QTY(state, productId) {
        let itemList = state.userData.cartData
        let itemResult = itemList.filter(a => a.productId === productId)[0]
        if (itemResult.qty > 1) {
            itemResult.qty--
        }
    },
    CART_PLUS_ITEM_QTY(state, productId) {
        let itemList = state.userData.cartData
        let itemResult = itemList.filter(a => a.productId === productId)[0]
        if (itemResult.qty < 10) {
            itemResult.qty++
        }
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