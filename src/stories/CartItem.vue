<template>
  <div class="d-flex c-cart-wrapper py-3">
    <div class="c-cart-left">
      <img
        class="c-cart-img"
        src="https://assets.website-files.com/5fafb178b3236f251c2ec605/5fb0e546bd22a06c5c340cf5_qtela.png"
      />
    </div>
    <div class="c-cart-center mr-auto">
      <div class="d-block">
        <span>FRISIAN FLAG UHT Purefarm Cokelat 225 ml</span>
        <div class="d-flex mt-3 ">
          <b-button class="c-btn-qty" variant="outline-secondary">-</b-button>
          <b class="c-item-qty my-auto">1</b>
          <b-button class="c-btn-qty" variant="outline-secondary">+</b-button>
        </div>
      </div>
    </div>
    <div class="c-cart-right col justify-content-end ml-auto">
      <b-icon class="h4 f-right" icon="bag-check" />
      <span>Rp 7.000</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "c-cart-item"
};
</script>
<style scoped>
.c-cart-wrapper {
  border-bottom: 1px solid #e4e9f2;
}

.c-cart-left {
}

.c-cart-img {
  width: 50px;
  height: 50px;
}

.c-cart-center {
  margin-left: 20px;
}

.c-item-qty {
  height: auto;
  width: 30%;
  font-weight: bold;
  text-align: center;
}

.c-btn-qty {
  height: 40px;
  width: 40px;
  font-weight: bold;
}
.c-cart-right {
  float: right !important;
}
</style>
