import local from './local'
export default {
    PRODUCT_SEARCH(state, query) {
        state.productSearchQuery = query.trim()
        // console.log(query)
    },
    CART_ADD(state, product) {
        let itemList = state.cartData
        if (itemList.length === 0) {
            itemList.push(product)
        } else {
            // checking if productId already exists
            // then product will not be added to cart
            // -------------------------------------
            // The .some() method tests whether at least one element in the 
            // array passes the test implemented by the provided function. 
            // It returns a Boolean value
            if (!itemList.some(a => a.productId === product.productId)) {
                // alert('no duplicates')
                itemList.push(product)
            }
        }
        //adding it to storage
        local.set(
            "cartData",
            {
                data: itemList,
            },
            // { ttl: 60 * 60 * 24 * 1000 }
        );
    },
    CART_REMOVE(state, productId) {
        //removing item from cart store
        let itemList = state.cartData
        state.cartData = itemList.filter(a => a.productId != productId)
        //removing item from cart local store
        local.set(
            "cartData",
            {
                data: state.cartData,
            },
            // { ttl: 60 * 60 * 24 * 1000 }
        );
        //checking if the local storage is empty
        //the data will be removed
        if (local.get('cartData').data.length === 0) {
            local.remove('cartData')
        }
    },
    CART_EMPTY(state) {
        state.cartData = []
        local.remove('cartData')
    },
    CART_MINUS_ITEM_QTY(state, productId) {
        let itemList = state.cartData
        let itemResult = itemList.filter(a => a.productId === productId)[0]
        if (itemResult.qty > 1) {
            itemResult.qty--
        }
        local.set(
            "cartData",
            {
                data: itemList,
            },
            // { ttl: 60 * 60 * 24 * 1000 }
        );
    },
    CART_PLUS_ITEM_QTY(state, productId) {
        let itemList = state.cartData
        let itemResult = itemList.filter(a => a.productId === productId)[0]
        if (itemResult.qty < 10) {
            itemResult.qty++
        }
        local.set(
            "cartData",
            {
                data: itemList,
            },
            // { ttl: 60 * 60 * 24 * 1000 }
        );
    },
    CART_CALCULATE_TOTAL(state) {
        let itemList = state.cartData;
        let productList = state.productDummy.data
        let itemPrice = itemList.map(
            a => {
                let productQty = productList.find(product => product.id === a.productId)
                return a.qty * productQty.price
            }
        )
        let totalPrice = 0
        itemPrice.map(
            price => { return totalPrice += price }
        )
        return totalPrice;
    },
    USER_SIGN_IN(state, newUserData) {
        state.userData = newUserData
        local.set('userData', newUserData)
    },
    USER_SIGN_OUT(state) {
        state.userData = {}
        local.remove('userData')
    }

}