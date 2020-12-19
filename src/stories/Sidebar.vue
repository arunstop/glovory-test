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
      width="360px"
    >
      <template #default="{hide}">
        <div class="d-flex flex-column">
          <div class="c-sidebar-header row p-3">
            <b-button
              type="button"
              class="close"
              variant="light"
              aria-label="Close"
              @click="hide"
            >
              <span aria-hidden="true">&times;</span>
            </b-button>
            <b class="mx-3">Cart</b>
          </div>
          <div class="c-sidebar-content column p-3">
            <c-cart-item />
            <c-cart-item />
            <c-cart-item />
            <c-cart-item />
          </div>
          <div class="c-sidebar-footer mt-auto p-3">
            <b-button class="c-btn-round mt-auto d-flex justify-content-between p-3 c-c-primary" variant="danger" block @click="hide">
              <span class="my-auto">Purchase Order</span>
              <h6 class="font-weight-bold my-auto">Rp 28.000</h6>
            </b-button>
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
  components: { CIconButton, CCartItem },
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
.c-sidebar-header {
  border-bottom: 1px solid #e4e9f2;
}
</style>
