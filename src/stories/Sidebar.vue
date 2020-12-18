<template>
  <div>
    <c-icon-button
      icon="bag-check"
      icon-hovered="bag-check-fill"
      v-b-toggle.sidebar-right
    />
    <b-sidebar
      id="sidebar-right"
      aria-labelledby="sidebar-no-header-title"
      backdrop
      right
      shadow
      no-header
    >
      <template #default="{hide}">
        <div>
          <div class="c-sidebar-header row p-3">
            <b-button type="button" class="close" variant="light" aria-label="Close" @click="hide">
              <span aria-hidden="true">&times;</span>
            </b-button>
            <b class="mx-3">Cart</b>
          </div>
          <div class="c-sidebar-content column p-3">
            <c-cart-item/>

            <nav class="mb-3">
              <b-nav vertical>
                <b-nav-item active @click="hide">Active</b-nav-item>
                <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                <b-nav-item href="#link-2" @click="hide"
                  >Another Link</b-nav-item
                >
              </b-nav>
            </nav>
            <b-button variant="primary" block @click="hide"
              >Close Sidebar</b-button
            >
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import CIconButton from "./IconButton.vue";
import CCartItem from "./CartItem.vue";

export default {
  name: "c-sidebar",
  components: { CIconButton,CCartItem},
  data() {
    return {
      isHovered: false
    };
  },
  methods: {
    hoverHandler(hovered) {
      this.isHovered = hovered;
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0px !important;
}
.c-sidebar-header{
    border-bottom: 1px solid #e4e9f2;
}
</style>
