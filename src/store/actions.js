export default {
    addToCart({ commit }, product) {
        commit('CART_ADD', product)
    },
    removeFromCart({ commit }, productId) {
        commit('CART_REMOVE', productId)
    },
    emptyCart({ commit }) {
        commit('CART_EMPTY')
    },
    minusCartItemQty({ commit }, productId) {
        commit('CART_MINUS_ITEM_QTY', productId)
    },
    plusCartItemQty({ commit }, productId) {
        commit('CART_PLUS_ITEM_QTY', productId)
    },
    searchProduct({ commit }, keyword) {
        commit('PRODUCT_SEARCH', keyword)
    },
    userSignIn({ commit }, newUserData) {
        commit('USER_SIGN_IN', newUserData)
    },
    userSignOut({ commit }) {
        commit('USER_SIGN_OUT')
    }
}