<template>
  <transition
    enter-active-class="animate__animated animate__bounceInLeft"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <div class="d-flex c-cart-wrapper py-3" :id="_id">
      <div class="c-cart-left">
        <img class="c-cart-img" :src="productData.src" />
      </div>
      <div class="c-cart-center mr-auto">
        <div class="d-flex flex-column">
          <p class="my-0 c-item-label">{{ productData.name }}</p>
          <div class="d-flex mt-3">
            <b-button
              class="c-btn-qty"
              variant="outline-secondary"
              @click="m_minus_qty"
              v-long-click="m_minus_qty"
            >
              -
            </b-button>
            <b class="c-item-qty my-auto">{{ ' '+productQtyCart+' ' }}</b>
            <b-button
              class="c-btn-qty"
              variant="outline-secondary"
              @click="m_plus_qty"
              v-long-click="m_plus_qty"
            >
              +
            </b-button>
          </div>
        </div>
      </div>
      <div class="c-cart-right d-flex flex-column ml-auto">
        <!-- remove item from cart -->
        <b-button class="ml-auto" variant="light" @click="m_remove">
          <b-icon icon="trash-fill" style="color: #c5cee0" />
        </b-button>
        <span class="c-item-price ml-auto mt-auto text-block font-weight-bold">
          {{ itemPrice.label }}
        </span>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "c-cart-item",
  props: {
    _id: String,
  },
  computed: {
    ...mapGetters(["getCartData", "getCartDataById","calculateCartItemPrice"]),
    productData() {
      let productList = this.$globals.props.productDummy;
      let productListByParams = productList.data.filter(
        (a) => a.id === this._id
      );
      // console.log(this.getCartDataById(this._id));
      //because .filter() returns an array
      //therefore getting the first index [0] is a must
      return productListByParams[0];
    },
    productQtyCart() {
      return this.getCartDataById(this._id)[0].qty;
    },
    itemPrice(){
      return this.calculateCartItemPrice(this._id);
    }
  },
  methods: {
    m_remove() {
      this.$store.dispatch("removeFromCart", this._id);
    },
    m_minus_qty() {
      this.$store.dispatch("minusCartItemQty", this._id);
    },
    m_plus_qty() {
      this.$store.dispatch("plusCartItemQty", this._id);
    },
  },
  created: function () {
    // alert(this._id);
  },
};
</script>
<style scoped>

.c-item-label {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
  min-height: 48px !important;
}

.c-cart-wrapper {
  border-bottom: 1px solid #e4e9f2;
}

.c-cart-left {
  display: block;
}

.c-cart-img {
  width: 50px;
  height: 50px;
}

.c-cart-center {
  width: 100%;
  margin-left: 20px;
}

.c-item-qty {
  height: auto;
  width: 30%;
  font-weight: bold;
  text-align: center;
}

.c-btn-qty {
  height: 40px;
  width: 40px;
  font-weight: bold;
}
.c-cart-right {
  width: 50%;
  margin-left: 20px !important;
  float: right !important;
}
</style>
