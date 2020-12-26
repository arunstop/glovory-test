<template>
  <div class="c-navbar">
    <div class="c-wrapper d-flex position-relative">
      <a href="#">
        <img class="logo" :src="logoUrl" />
      </a>
      <!-- v-model.lazy is for after input.value changed -->
      <input
        type="text"
        class="input-search input-search-visibility"
        maxlength="256"
        name="Search"
        data-name="Search"
        placeholder="Search products"
        id="Search"
        v-model="data_product_search_query"
      />

      <div class="ml-auto row mr-0">
        <c-icon-button
          class="btn-icon-search ml-2"
          _icon="search"
          _icon-hovered="search"
          @click.native="m_toggle_search_bar_2nd"
        />
        <c-icon-button
          class="ml-2"
          _icon="bag-check"
          _icon-hovered="bag-check-fill"
          :_badgeLabel="data_cart_item"
          v-b-toggle.sidebar-right
        />
        <c-sidebar :_id="'sidebar-right'" />

        <c-icon-button
          class="ml-2"
          _icon="person"
          _icon-hovered="person-fill"
          @click.native="m_auth()"
        />
      </div>
      <div
        class="container-fluid position-absolute p-0 mx-0 c-search-bar-2 ani-bounce-in"
        :style="{ display: h_hide_search_bar2nd }"
      >
        <b-input-group>
          <b-form-input
            type="text"
            class="input-search mx-0"
            maxlength="256"
            name="Search2nd"
            data-name="Search2nd"
            placeholder="Search products"
            id="Search2nd"
            v-model="data_product_search_query"
            lazy
          />

          <b-input-group-append class="bg-light">
            <b-button variant="outline-danger" @click="m_toggle_search_bar_2nd"
              ><h3 aria-hidden="true" class="m-0">&times;</h3></b-button
            >
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script>
import "./global.css";
import "./header.css";
import CSidebar from "./Sidebar.vue";
import CIconButton from "./IconButton.vue";
import { mapState } from "vuex";

export default {
  name: "my-header",

  data() {
    return { showSearchBar2nd: false };
  },

  components: { CSidebar, CIconButton },

  props: {
    user: {
      type: String,
    },
  },

  computed: {
    ...mapState({
      data_cart_item: (state) => state.cartItem,
      // data_product_search_query: state => state.productSearchQuery
    }),
    data_product_search_query: {
      get: function () {
        return this.$store.state.productSearchQuery;
      },
      set: function (value) {
        this.$store.dispatch("searchProduct", value);
      },
    },
    h_hide_search_bar2nd() {
      return this.showSearchBar2nd ? "block" : "none";
    },
    logoUrl() {
      return this.$globals.props.logoUrl;
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
    m_search_product(input) {
      this.$store.dispatch("searchProduct", input.target.value);
    },
    m_auth() {
      var userData = this.$store.getters.getUserData;
      if (userData.email === "" || userData.email === undefined) {
        this.$router.push("/auth");
      } else {
        this.$globals.ui.showModal(
          "Do you want to sign out from this session and account?",
          "success",
          () => {
            this.$store.dispatch("userSignOut");
            // alert(userData)
          },
          () => {}
        );
      }
    },
    m_toggle_search_bar_2nd() {
      this.showSearchBar2nd = !this.showSearchBar2nd;
      // alert(this.showSearchBar2nd)
    },
  },
};
</script>

<style scoped>
.btn-icon-search {
  display: none;
}

@media screen and (max-width: 960px) {
  .input-search-visibility {
    display: none;
  }

  .btn-icon-search {
    display: block;
  }
}

.ani-bounce-in {
  animation: bounce-in 0.6s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
