<template>
  <div class="m-auto d-flex flex-column">
    <div class="d-flex flex-column">
      <h4 class="text-left">HTTP Error</h4>
      <h1 class="text-danger display-1 font-weight-bold">404</h1>
      <h4 class="text-right">Page Not Found</h4>
    </div>
    <c-back-button :_label="'Back to Home'" :_path="'/'"/>
  </div>
</template>

<script>
import CBackButton from "../stories/BackButton.vue";

export default {
  name: "NotFound",
  components: { CBackButton },
};
</script>

<style>
</style>