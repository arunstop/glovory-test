import localStorage from './localStorage'

export default {
  productSearchQuery: '',
  userData: {
    email: null,
    password: null,
    latestSession: null,
  },
  cartData: [],
  productDummy: require('../assets/products.json'),
  localStorage
}