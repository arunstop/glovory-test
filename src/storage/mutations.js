export default {
    product_search(state, query) {
        state.productSearchQuery = query
        // console.log(query)
    },
    cart_add(state) {
        state.cartItem++
    },
    cart_remove(state) {
        state.cartItem--
    },
    cart_empty(state) {
        state.cartItem = 0
    }
}