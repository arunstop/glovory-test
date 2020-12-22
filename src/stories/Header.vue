<template>
  <div class="c-navbar">
    <div class="c-wrapper d-flex">
      <img
        class="logo"
        src="https://assets.website-files.com/5fafb178b3236f251c2ec605/5fafe519c3163b6fd26dd449_logo-color.svg"
      />
      <input
        type="text"
        class="input-search"
        maxlength="256"
        name="Search"
        data-name="Search"
        placeholder="Search products"
        id="Search"
        v-model="data_product_search_query"
        @input="m_search_product"
        
      />
      <div class="ml-auto row">
        <!-- <my-button
            size="small"
            @onClick="onLogout"
            label="Log out"
            v-if="user"
          /> -->
        <my-button
          size="small"
          @onClick="onLogin"
          label="Log in"
          v-if="!user"
        />
        <my-button
          primary
          size="small"
          @onClick="onCreateAccount"
          label="Sign up"
          v-if="!user"
        />

        <c-icon-button
          class="btn-search ml-2"
          _icon="search"
          _icon-hovered="search"
        />
        <c-icon-button
          _icon="bag-check"
          _icon-hovered="bag-check-fill"
          :_badgeLabel="data_cart_item"
          v-b-toggle.sidebar-right
        />
        <c-side-bar :_id="'sidebar-right'" />
        <c-icon-button
          _icon="person"
          _icon-hovered="person-fill"
          class="ml-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "./global.css";
import "./header.css";
import MyButton from "./Button.vue";
import CSideBar from "./Sidebar.vue";
import CIconButton from "./IconButton.vue";
import { mapState } from 'vuex'

export default {
  name: "my-header",

  components: { MyButton, CSideBar, CIconButton },

  props: {
    user: {
      type: String,
    },
  },

  computed: {
    ...mapState({
      data_cart_item: state => state.cartItem,
      // data_product_search_query: state => state.productSearchQuery
    }),
    data_product_search_query: {
        get: function () {
          return this.$store.state.productSearchQuery
        },
        set:function (value) {
          this.$store.commit("product_search", value)
        },
      },
  },

  methods: {
    onLogin() {
      this.$emit("onLogin");
    },
    onLogout() {
      this.$emit("onLogout");
    },
    onCreateAccount() {
      this.$emit("onCreateAccount");
    },
    m_search_product(input){
      this.$store.commit('product_search', input.target.value)
    }
  },
};
</script>

<style scoped>
.btn-search {
  display: none;
}

@media screen and (max-width: 960px) {
  .input-search {
    display: none;
  }

  .btn-search {
    display: block;
  }
}
</style>
