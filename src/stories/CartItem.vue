<template>
  <transition name="bounce-in">
    <div class="d-flex c-cart-wrapper py-3" :id="_id" v-if="visible">
      <div class="c-cart-left">
        <img class="c-cart-img" :src="productData.src" />
      </div>
      <div class="c-cart-center mr-auto">
        <div class="d-block">
          <p class="mt-0 c-max-lines-2">{{ productData.name }}</p>
          <div class="d-flex mt-3">
            <b-button
              class="c-btn-qty"
              variant="outline-secondary"
              @click="m_minus_qty"
              v-long-click="m_minus_qty"
            >
              -
            </b-button>
            <b class="c-item-qty my-auto">{{ productQtyCart }}</b>
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
          {{ productData.priceLabel }}
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
    visible() {
      return true;
    },
    ...mapGetters(["getCartData", "getCartDataById"]),
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
  },
  methods: {
    m_remove() {
      // console.log("clicked");
      // this.visible = false;
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
/* add this to bounce when opening sidebar */
.ani-bounce-in {
  animation: bounce-in 0.6s;
}

.c-max-lines-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
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
/* animation */
.bounce-in-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-in-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
