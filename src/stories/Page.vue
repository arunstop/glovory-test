<template>
  <div class="main-wrapper">
    <MyHeader
      :user="user"
      @onLogin="onLogin"
      @onLogout="onLogout"
      @onCreateAccount="onCreateAccount"
    />
    <div class="content-wrapper">
      <b-row class="w-layout-grid ">
        <Card
          v-for="product in productList.data"
          :key="product.id"
          :productData="product"
        />
      </b-row>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import "./page.css";
import MyHeader from "./Header.vue";
import MyFooter from "./MyFooter.vue";
import Card from "./Card.vue";
import productJSON from "../assets/products.json";

export default {
  name: "my-page",

  components: { MyHeader, Card, MyFooter },

  props: {
    user: {
      type: Object
    },
    productData: { type: Object }
  },
  data() {
    return {
      productList: productJSON
    };
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
    }
  }
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
