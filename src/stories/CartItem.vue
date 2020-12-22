<template>
    <div class="d-flex c-cart-wrapper py-3 ani-bounce-in">
      <div class="c-cart-left">
        <img
          class="c-cart-img"
          src="https://assets.website-files.com/5fafb178b3236f251c2ec605/5fb0e546bd22a06c5c340cf5_qtela.png"
        />
      </div>
      <div class="c-cart-center mr-auto">
        <div class="d-block">
          <p>FRISIAN FLAG UHT Purefarm Cokelat 225 ml</p>
          <div class="d-flex mt-3">
            <b-button class="c-btn-qty" variant="outline-secondary">-</b-button>
            <b class="c-item-qty my-auto">1</b>
            <b-button class="c-btn-qty" variant="outline-secondary">+</b-button>
          </div>
        </div>
      </div>
      <div class="c-cart-right d-flex flex-column ml-auto">
        <!-- remove item from cart -->
        <b-button class="ml-auto" variant="light" @click="m_remove" >
          <b-icon icon="trash-fill" style="color: #c5cee0" />
        </b-button>
        <p class="c-item-price mt-auto text-block font-weight-bold">Rp 7.000</p>
      </div>
    </div>
</template>
<script>
export default {
  name: "c-cart-item",
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    m_remove() {
      console.log('clicked');
      // this.visible = false;
      this.$store.commit('cart_remove')
    },
  },
};
</script>
<style scoped>
/* add this to bounce when opening sidebar */
.ani-bounce-in{
  animation: bounce-in .6s;
}

.c-cart-wrapper {
  border-bottom: 1px solid #e4e9f2;
}

.c-cart-left {
  display: block;
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
  width: 50%;
  margin-left: 20px !important;
  float: right !important;
}
/* animation */
.bounce-in-enter-active {
  animation: bounce-in .5s;
}
.bounce-in-leave-active {
  animation: bounce-in .5s reverse;
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
