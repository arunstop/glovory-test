<template>
  <Page />
</template>

<script>
import { mapGetters } from "vuex";
import Page from "../stories/Page.vue";
export default {
  name: "Home",
  components: {
    Page,
  },
  computed: {
    // normal way
    id() {
      return this.$store.getters.generateId;
    },
    longId() {
      return this.$store.getters.generateLongId(120);
    },
    // vuex mapgetters helper
    ...mapGetters(["generateId", "generateLongId", "getUserData"]),
  },
  created: function () {
    let searchQueryUrl = this.$route.query.search;
    if (searchQueryUrl) {
      this.$store.dispatch("searchProduct", searchQueryUrl);
      // console.log(search);
    }
  },
};
</script>

<style>
</style>
