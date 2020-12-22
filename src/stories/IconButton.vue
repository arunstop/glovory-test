<template>
  <b-button
    class="c-size-48 position-relative"
    variant="light"
    v-b-hover="hoverHandler"
  >
    <b-badge class="c-badge c-c-primary" variant="dark" pill v-if="_badgeLabel > 0 || _badgeLabel"> 
      {{ _badgeLabel }}
    </b-badge>
    <b-icon v-if="isHovered" :icon="_iconHovered" :aria-label="_iconHovered">
    </b-icon>
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
    _badgeLabel: [String,Number],//can be number as well
  },
  methods: {
    hoverHandler(hovered) {
      this.isHovered = hovered;
    },
    m_show_badge(){
      const bl= this._badgeLabel;
      if(bl==7){
        return true
      }else{
        return false
      }
    }
  },
};
</script>
<style scoped>
.c-badge {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  opacity: 0.9;
}
.c-size-48 {
  height: 48px !important;
  width: 48px !important;
}
</style>
