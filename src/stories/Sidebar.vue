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
        <div
          class="d-flex flex-column h-100 overflow-x-hidden position-relative"
        >
          <div class="c-sidebar-header row m-0 p-3 align-items-center">
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
              <u class="c-text-grey"> Clear All </u>
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
          <div
            class="d-flex h-100 w-100 m-auto c-c-"
            v-if="data_cart.length === 0"
          >
            <div
              class="c-text-grey m-auto d-flex flex-column align-items-center"
            >
              <b-icon class="display-3" icon="cart-x"></b-icon>
              <h5 class="mt-3">Cart is empty...</h5>
            </div>
          </div>
          <div class="d-flex flex-column" v-else>
            <div class="c-sidebar-content column p-3">
              <!-- using item.id as key resulted an issue on transition which is:
            only the last element will be
             -->
              <c-cart-item
                v-for="item in data_cart"
                :key="item.productId"
                :_id="item.productId.toString()"
              />
            </div>
            <div class="c-sidebar-footer p-3 container-fluid fixed-bottom">
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
                <h6
                  class="font-weight-bold my-auto animate__animated animate__heartBeat"
                  :key="Math.random()"
                >
                  {{ calculateTotalCart.label }}
                </h6>
              </b-button>
            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    ...mapGetters(["calculateTotalCart"]),
    e_body() {
      return document.getElementsByTagName("body")[0];
    },
    data_cart() {
      return this.$store.state.cartData;
    },
  },
  methods: {
    //make body unscrollable when sidebar is shown
    unscrollableBody(visible) {
      // const e_body = document.getElementsByTagName("body")[0];
      if (visible) {
        // alert("hidden");
        this.e_body.classList.add("overflow-hidden");
      } else {
        // alert("auto");
        this.e_body.classList.remove("overflow-hidden");
      }
    },
    purchaseHandler() {
      if (this.$store.getters.isSignedIn) {
        this.$store.dispatch("emptyCart");
        this.$globals.ui.showToast(
          "Transaction success, your order is being processed!",
          { variant: "success" }
        );
      } else {
        this.$globals.ui.showToast("Authentication needed, please sign in", {
          variant: "warning",
        });
        // alert("auto");
        this.e_body.classList.remove("overflow-hidden");
        this.$router.push("/auth");
      }
      console.log(this.calculateTotalCart);
    },
    m_empty_cart() {
      this.$store.dispatch("emptyCart");
    },
    m_empty_cart1() {
      // accessing global variable via this.$globals
      // var okAct = () => {
      //   this.$store.dispatch("emptyCart");
      //   //closing sidebar with reference
      //   this.$refs[this._id].hide();
      // };
      this.$globals.ui.showModal(
        "Empty Cart",
        "All of your items in the cart will be removed and the action cannot be undone. Are you sure?",
        "success",
        () => {
          this.$store.dispatch("emptyCart");
          this.$globals.ui.showToast("Cart has been emptied", {
            variant: "success",
          });
          //closing sidebar with reference
          this.$refs[this._id].hide();
        },
        () => {}
      );
    },
  },
  created: function () {
    // console.log(this.$store.getters.calculateCartTotal)
  },
};
</script>

<style scoped>
.overflow-x-hidden {
  overflow-x: hidden;
}

.c-sidebar-content {
  padding-bottom: 90px !important;
}
/* centering a position-fixed div */
.c-cart-no-item {
  top: 50%;
  left: 25%;
  right: 25%;
}

.c-sidebar-header {
  border-bottom: 1px solid #e4e9f2;
}
</style>
