<template>
  <Page user="Arunstop" />
</template>

<script>
import { mapGetters } from "vuex";
import Page from "../stories/Page.vue";
export default {
  name: "Home",
  components: {
    Page
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
    // console.log(this.$store.getters.getUserData)
    // this.$store.dispatch('userSignOut')
    // console.log(this.$store.getters.getUserData)
    console.log(this.$globals.props.appName);
  },
};
</script>

<style>
</style>
