<template>
  <div>
    <b-sidebar
      :id="_id"
      aria-labelledby="sidebar-no-header-title"
      backdrop
      right
      shadow
      no-header
      width="360px"
      @change="unscrollableBody"
    >
      <template #default="{ hide }">
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
            <u class="ml-auto clickable c-btn-clear-all" v-b-modal.modal-center>
              Clear All
            </u>
            <!-- with colon(:) u need to add '' -->
            <c-modal
              :_id="'modal-center'"
              _title="Empty cart"
              _message="All items in cart will be removed, are you sure?"
            />
          </div>
          <div class="c-sidebar-content column p-3">
            <c-cart-item />
            <c-cart-item />
            <c-cart-item />
            <c-cart-item />
          </div>
          <div class="c-sidebar-footer mt-auto p-3">
            <b-button
              class="c-btn-round mt-auto d-flex justify-content-between p-3 c-c-primary"
              variant="danger"
              block
              @click="hide"
            >
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
// import CIconButton from "./IconButton.vue";
import CCartItem from "./CartItem.vue";
import CModal from "./Modal.vue";

export default {
  name: "c-sidebar",
  components: { CCartItem, CModal },
  props: {
    _id: String,
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    hoverHandler(hovered) {
      this.isHovered = hovered;
    },
    //make body unscrollable when sidbar is shown
    unscrollableBody(visible) {
      const e_body = document.getElementsByTagName("body")[0];
      if (visible) {
        e_body.classList.add("overflow-hidden");
      } else {
        e_body.classList.remove("overflow-hidden");
      }
    },
  },
};
</script>

<style scoped>
.row {
  margin: 0px !important;
}
.c-sidebar-header {
  border-bottom: 1px solid #e4e9f2;
}

.c-btn-clear-all {
  color: #8f9bb3;
}
</style>
