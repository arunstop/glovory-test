<template>
  <div class="w-100 c-not-found-bg">
    <div class="h-100 d-flex c-bg-translucent">
      <div class="d-flex flex-column m-auto">
        <div class="d-flex flex-column">
          <h4 class="text-left">HTTP Error</h4>
          <h1 class="text-danger display-1 font-weight-bold">404</h1>
          <h4 class="text-right">Page Not Found</h4>
        </div>
        <c-back-button :_label="'Back to Home'" :_path="'/'" />
      </div>
    </div>
  </div>
  <!-- <a href="https://www.vecteezy.com/free-vector/solar-system">Solar System Vectors by Vecteezy</a> -->
</template>

<script>
import CBackButton from "../stories/BackButton.vue";

export default {
  name: "NotFound",
  components: { CBackButton },
};
</script>

<style scoped>
.c-not-found-bg {
  background-image: url('../assets/bg_notfound.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>