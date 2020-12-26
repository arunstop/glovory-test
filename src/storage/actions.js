export default {
    addToCart({ commit }, qty) {
        commit('CART_ADD', qty)
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