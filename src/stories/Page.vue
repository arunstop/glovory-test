<template>
  <div class="main-wrapper">
    <c-header
      @onLogin="onLogin"
      @onLogout="onLogout"
      @onCreateAccount="onCreateAccount"
    />

    <div class="c-content-wrapper">
      <!-- not found display -->
      <div
        class="position-fixed d-flex h-100 w-100 m-auto"
        v-if="productResult.length === 0"
      >
        <div
          class="c-text-grey m-auto d-flex flex-column align-items-center animate__animated animate__swing"
          :key="Math.random()"
        >
          <b-icon class="display-3" icon="emoji-expressionless"></b-icon>
          <h5 class="mt-3">No products found...</h5>
        </div>
      </div>
      <div class="c-content-list">
        <b-row
          class="w-layout-grid justify-content-around justify-content-xl-start position-relative"
        >
          <c-card
            class="clickable"
            @click.native="navProductDetails(product.id)"
            v-for="product in productResult"
            :key="product.id"
            :productData="product"
          />
        </b-row>
      </div>
    </div>
    <c-footer />
  </div>
</template>

<script>
import "./page.css";
import CHeader from "./Header.vue";
import CFooter from "./Footer.vue";
import CCard from "./Card.vue";
// import productJSON from "../assets/products.json";

export default {
  name: "my-page",

  components: { CHeader, CCard, CFooter },

  props: {
    productData: { type: Object },
  },
  data() {
    return {};
  },

  computed: {
    search_query() {
      return this.$store.state.productSearchQuery;
    },
    productResult: function () {
      const sq = this.search_query.toLowerCase();
      var productList = this.$globals.props.productDummy;
      return productList.data.filter(function (data) {
        return data.name.toLowerCase().includes(sq);
      });
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
    navProductDetails(id) {
      //with NAME
      // this.$router.push({name: "product details", params:{id:id}})

      //with PATH
      // using ` backtick/grave accent
      this.$router.push({ path: `/product/${id}` });
    },
  },
};
</script>

<style scoped>
.main-wrapper {
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.c-content-wrapper {
  padding-left: 40px;
  padding-right: 40px;
}

.c-content-list {
  padding-top: 120px;
}

.content {
  display: block;
}

.w-layout-grid {
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  margin: 0px !important;
}
</style>
