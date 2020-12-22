export default {
    addToCart({commit}, qty){
        commit('CART_ADD', qty);
    }
}