<template>
  <b-button v-b-hover="hoverHandler" size="md" variant="light" class="spacer">
    <b-icon
      v-if="isHovered"
      :icon="_iconHovered"
      :aria-label="_iconHovered"
    ></b-icon>
    <b-icon v-else :icon="_icon" :aria-label="_icon"></b-icon>
  </b-button>
</template>
<script>
export default {
  name: "c-icon-button",
  data() {
    return {
      isHovered: false,
    };
  },
  props: {
    _icon: String,
    _iconHovered: String,
  },
  methods: {
    hoverHandler(hovered) {
      this.isHovered = hovered;
    },
  },
};
</script>
<style scoped>
.spacer {
  margin-left: 16px;
}
</style>
