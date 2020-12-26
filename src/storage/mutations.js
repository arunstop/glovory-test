export default {
    PRODUCT_SEARCH(state, query) {
        state.productSearchQuery = query
        // console.log(query)
    },
    CART_ADD(state, qty) {
        state.cartItem += qty
    },
    cart_remove(state) {
        state.cartItem--
    },
    CART_EMPTY(state) {
        state.cartItem = 0
    },
    USER_SIGN_IN(state, newUserData) {
        state.userData = newUserData
    },
    USER_SIGN_OUT(state) {
        state.userData = {}
    }

}