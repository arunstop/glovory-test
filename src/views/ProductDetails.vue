<template>
  <div class="w-100 d-flex flex-column">
    <div class="m-auto d-flex flex-column">
      <img class="m-auto" :src="productData.src" />
      <h1>product name : {{ productData.name }}</h1>
      <c-back-button :_label="'Back to Home'" :_path="'/'" />
    </div>
  </div>
</template>

<script>
import CBackButton from "../stories/BackButton.vue";

export default {
  name: "product-details",
  components: { CBackButton },
  props: {
    _id: String,
  },
  data() {
    return {};
  },
  computed: {
    paramId() {
      return this.$route.params.id;
    },
    productData() {
      let productList = this.$globals.props.productDummy;
      let productListByParams = productList.data.filter(
        (a) => a.id === this.$route.params.id
      );
      //because .filter() returns an array
      //therefore getting the first index [0] is a must
      return productListByParams[0];
    },
  },
  created: function () {
    // console.log(this.data.productData);
  },
};
</script>

<style>
</style>