export default {
    product_search(state, query) {
        state.productSearchQuery = query
        // console.log(query)
    },
    CART_ADD(state, qty) {
        state.cartItem+=qty
    },
    cart_remove(state) {
        state.cartItem--
    },
    cart_empty(state) {
        state.cartItem = 0
    }
}