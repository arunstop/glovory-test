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
    }

}