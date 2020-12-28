export default {
    addToCart({ commit }, id) {
        commit('CART_ADD', id)
    },
    removeFromCart({ commit }, id) {
        commit('CART_REMOVE', id)
    },
    emptyCart({ commit }) {
        commit('CART_EMPTY')
    },
    searchProduct({commit}, keyword){
        commit('PRODUCT_SEARCH', keyword)
    },
    userSignIn({commit}, newUserData){
        commit('USER_SIGN_IN', newUserData)
    },
    userSignOut({commit}){
        commit('USER_SIGN_OUT')
    }
}