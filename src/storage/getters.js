export default {
    generateId() {
        return (Math.random().toString(36) + Date.now().toString(36)).substring(2)
    },
    // generateLongId : (state) =>(param) =>  {
    generateLongId: () => (param) => {
        return (Math.random().toString(36) + Date.now().toString(36) + param.toString(36)).substring(2)
    },
    getUserData: (state) => {
        return state.userData;
    },
    getCartData: (state) => {
        return state.userData.cartData
    },
    getCartDataById: (state) => (id) => {
        return state.userData.cartData.filter(a => a.productId === id)
    },
    isSignedIn: (state) => {
        let email = state.userData.email
        let password = state.userData.password
        let latestSession = state.userData.latestSession
        // console.log(email + ' // ' + password + ' // ' + latestSession)
        if (email != null && password != null && latestSession != null) {
            return true;
        } else {
            return false
        }
    }


}