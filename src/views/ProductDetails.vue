<template>
  <div class="w-100 d-flex flex-column">
    <div class="m-auto d-flex flex-column">
      <h1>product id : {{ paramId }}</h1>
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
  computed: {
    paramId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>