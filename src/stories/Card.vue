<template>
  <div class="c-card ani-bounce-in">
    <div class="c-product-thumbnail">
      <img class="c-product-img" :src="productData.src" />
    </div>
    <div class="c-product-desc c-fw500 d-flex flex-column mb-2">
      <p class="mt-1">{{ productData.name }}</p>
      <p class="c-text-primary mb-0 mt-auto">{{ productData.priceLabel }}</p>
    </div>
    <!-- click.stop prevent parent being clicked as children being clicked  -->
    <b-button
      class="c-c-primary c-btn-round c-fw500 mt-auto"
      @click.stop="m_addTocart"
    >
      Add to cart
    </b-button>
    <c-toast
      :_id="toastId"
      :_message="'Succesfully adding item to your cart!'"
      :_others="{ 'no-close-button': true, variant: 'success' }"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    toastId() {
      return "toast-" + this.pdId;
    },
    ...mapGetters(["generateId"]),
  },
  methods: {
    m_addTocart() {
      this.$store.dispatch("addToCart", this.productData.id);
      this.$globals.ui.showToast("Succesfully added item to your cart!", {variant: 'success', })
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
</style>
