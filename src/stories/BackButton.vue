<template>
  <b-row class="mx-auto mt-5">
    <router-link :to="_path" class="btn btn-outline-primary p-2 c-btn-back d-flex" replace>
      <div class="d-flex m-auto">
        <b-icon class="my-auto h3 mr-1" icon="arrow-left" />
        <h5 class="my-auto">{{ _label }}</h5>
      </div>
    </router-link>
  </b-row>
</template>

<script>
export default {
  name: "BackButton",
  props: {
    _label: String,
    _path: String,
  },
};
</script>

<style scoped>
.c-btn-back{
  height: 48px !important;
}
</style>