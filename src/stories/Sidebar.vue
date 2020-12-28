<template>
  <div>
    <b-sidebar
      :id="_id"
      :ref="_id"
      aria-labelledby="sidebar-no-header-title"
      backdrop
      right
      shadow
      no-header
      width="360px"
      @change="unscrollableBody"
      lazy
    >
      <template #default="{ hide }">
        <div class="d-flex flex-column">
          <div class="c-sidebar-header row p-3 align-items-center">
            <b-button
              type="button"
              class="close px-1"
              variant="light"
              aria-label="Close"
              @click="hide"
            >
              <span aria-hidden="true">&times;</span>
            </b-button>
            <b class="mx-3">
              Cart ({{ data_cart.length }} item{{
                data_cart.length > 1 ? "s" : ""
              }})
            </b>
            <b-button class="ml-auto" variant="light" @click="m_empty_cart1()">
              <!-- v-b-modal.modal-empty-cart -->
              <u class="c-btn-clear-all"> Clear All </u>
            </b-button>

            <!-- with colon(:) u need to add '' -->
            <c-modal
              :_id="'modal-empty-cart'"
              _title="Empty cart"
              _message="All items in cart will be removed, are you sure?"
              :_ok_title="'Delete'"
              :_ok_variant="'danger'"
              :_ok_action="[m_empty_cart, purchaseHandler, hide]"
            />
          </div>
          <div class="c-sidebar-content column p-3">
            <c-cart-item
              v-for="item in data_cart"
              :key="item.id"
              :_id="item.productId.toString()"
            />
          </div>
          <div class="c-sidebar-footer mt-auto p-3">
            <b-button
              class="c-btn-round mt-auto d-flex justify-content-between p-3 c-c-primary"
              variant="danger"
              block
              @click="
                hide();
                purchaseHandler();
              "
              v-if="data_cart.length > 0"
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
import CCartItem from "./CartItem.vue";
import CModal from "./Modal.vue";
// import customToast from "./custom-toast";

export default {
  name: "c-sidebar",
  components: { CCartItem, CModal },
  props: {
    _id: String,
  },
  computed: {
    data_cart() {
      return this.$store.state.userData.cartData;
    },
  },
  methods: {
    //make body unscrollable when sidebar is shown
    unscrollableBody(visible) {
      const e_body = document.getElementsByTagName("body")[0];
      if (visible) {
        e_body.classList.add("overflow-hidden");
      } else {
        e_body.classList.remove("overflow-hidden");
      }
    },
    purchaseHandler() {
      // console.log(this.$root);
      // globalUi.showToast(this.$root.$bvToast, "Cart has been emptied", {variant: "danger",});
      // customToast()
      // console.log(this.$globals.methods)
      // this.$globals.ui.showToast('Cart has been emptied')
    },
    m_empty_cart() {
      this.$store.dispatch("emptyCart");
    },
    m_empty_cart1() {
      // accessing global variable via this.$globals
      // var okAct = () => {
      //   this.$store.dispatch("emptyCart");
      //   this.$globals.ui.showToast("Cart has been emptied");
      //   //closing sidebar with reference
      //   this.$refs[this._id].hide();
      // };
      this.$globals.ui.showModal(
        "All of your items in the cart will be removed and the action cannot be undone. Are you sure?",
        "success",
        () => {
          this.$store.dispatch("emptyCart");
          this.$globals.ui.showToast("Cart has been emptied");
          //closing sidebar with reference
          this.$refs[this._id].hide();
        },
        () => {}
      );
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
