<template>
  <div class="c-card ani-bounce-in">
    <div class="c-product-thumbnail">
      <img class="c-product-img" :src="productData.src" @click="m_toast" />
    </div>
    <div class="c-product-desc c-fw500">
      <p class="mt-1">{{ productData.name }}</p>
      <p class="c-text-primary">{{ productData.priceLabel }}</p>
    </div>
    <b-button
      class="c-c-primary c-btn-round c-fw500"
      @click="
        m_addTocart();
        m_toast();
      "
    >
      Add to cart
    </b-button>
    <c-toast
      :_id="t_pdId"
      :_message="'Succesfully adding item to your cart!'"
      :_others="{ 'no-close-button': true, variant: 'success'}"
    />
  </div>
</template>

<script>
import "./card.css";
import CToast from "./Toast.vue";
export default {
  name: "Card",
  components: { CToast },
  props: {
    productData: Object,
  },
  data() {
    return {
      pdId: this.productData.id,
    };
  },
  computed: {
    t_pdId() {
      return "toast-" + this.pdId;
    },
  },
  methods: {
    m_addTocart() {
      this.$store.commit("cart_add");
      // alert(this.$store.state.cartItem)
    },
    m_toast() {
      this.$bvToast.show(this.t_pdId);
    },
  },
};
</script>
<style scoped>
.ani-bounce-in {
  animation: bounce-in 0.6s;
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

.c-card:hover {
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.2);
  -webkit-transform: translate(0px, -5px);
  -ms-transform: translate(0px, -5px);
  transform: translate(0px, -5px);
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
