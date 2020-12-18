<template>
  <div class="c-card">
    <div class="c-product-thumbnail">
      <img class="c-product-img" :src="productData.src" />
    </div>
    <div class="c-product-desc">
      <p><b>{{ productData.name }}</b></p>
      <p><b>{{ productData.priceLabel }}</b></p>
    </div>
    <b-button variant="danger"><b>Add to cart</b></b-button>
  </div>
</template>

<script>
import "./card.css";
export default {
  name: "Card",
  props: {
    productData: Object
  }
};
</script>
