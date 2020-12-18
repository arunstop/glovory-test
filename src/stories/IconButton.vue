<template>
  <b-button v-b-hover="hoverHandler" size="md" variant="light" class="spacer">
    <b-icon v-if="!isHovered" :icon="icon" :aria-label="icon"></b-icon>
    <b-icon v-else :icon="iconHovered" :aria-label="iconHovered"></b-icon>
  </b-button>
</template>
<script>
export default {
  name: "c-icon-button",
  data() {
    return {
      isHovered: false
    };
  },
  props:{
      icon:String,
      iconHovered:String
  },
  methods: {
    hoverHandler(hovered) {
      this.isHovered = hovered;
    }
  }
};
</script>
<style scoped>
.spacer{
  margin-left: 16px;
}
</style>
