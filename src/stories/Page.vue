<template>
  <div class="main-wrapper">
    <c-header
      @onLogin="onLogin"
      @onLogout="onLogout"
      @onCreateAccount="onCreateAccount"
    />
    <div class="content-wrapper">
      <b-row class="w-layout-grid">
        <c-card
          class="clickable"
          @click.native="navProductDetails(product.id)"
          v-for="product in productResult"
          :key="product.id"
          :productData="product"
        />
      </b-row>
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
    return {

    };
  },

  computed: {
    search_query() {
      return this.$store.state.productSearchQuery;
    },
    productResult: function () {
      const sq = this.search_query.toLowerCase();
      var productList= this.$globals.props.productsDummy
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
    navProductDetails(id){
      //with NAME
      // this.$router.push({name: "product details", params:{id:id}})
      
      //with PATH
      // using ` backtick/grave accent
      this.$router.push({path: `/product/${id}`})
    }
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

.content-wrapper {
  padding-left: 40px;
  padding-right: 40px;
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
