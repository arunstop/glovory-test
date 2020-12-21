<template>
  <div class="c-card">
    <div class="c-product-thumbnail">
      <img class="c-product-img" :src="productData.src" />
    </div>
    <div class="c-product-desc c-fw500">
      <p>{{ productData.name }}</p>
      <p class="c-text-primary">{{ productData.priceLabel }}</p>
    </div>
    <b-button class="c-c-primary c-btn-round c-fw500" @click="m_addTocart()">Add to cart</b-button>
  </div>
</template>

<script>
import "./card.css";
export default {
  name: "Card",
  props: {
    productData: Object
  },
  methods:{
    m_addTocart(){
      this.$store.commit('increment');
      alert(this.$store.state.cartItem)
    }
  }
};
</script>
<style scoped>
.c-card:hover {
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.2);
  -webkit-transform: translate(0px, -5px);
  -ms-transform: translate(0px, -5px);
  transform: translate(0px, -5px);
}
</style>
