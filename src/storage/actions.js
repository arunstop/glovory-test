export default {
    addToCart({ commit }, qty) {
        commit('CART_ADD', qty)
    },
    emptyCart({ commit }) {
        commit('CART_EMPTY')
    },
    searchProduct({commit}, keyword){
        commit('PRODUCT_SEARCH', keyword)
    }
}