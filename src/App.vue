<template>
  <div id="app">
    <!-- <p>{{ kekw }}</p> -->
    <Page user="Arunstop" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import HelloWorld from "./components/HelloWorld.vue";
import Page from "./stories/Page.vue";
// import Alert from "./stories/Alert.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Page,
    // Alert
  },
  computed: {
    // normal way
    id() {
      return this.$store.getters.generateId;
    },
    kekw(){
      return console.log(this.$appName)
    },
    longId() {
      return this.$store.getters.generateLongId(120);
    },
    // vuex mapgetters helper
    ...mapGetters(['generateId', 'generateLongId'])
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#app {
  font-family: Rubik, sans-serif !important;
  /* font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* width: 100%;
  min-height: 100vh; 100 viewport height */
  background-color: #f5f6f8;
  display: flex;
  /* removed animation because sometimes it lagged */
  /* animation: fade-in 0.6s; */
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.9;
  }
}

body {
  margin: 0px;
  font-family: Rubik, sans-serif !important;
  color: #222b45;
  font-size: 16px;
  line-height: 24px;
  overflow: auto;
}
/* body:hover{
  overflow: auto;
} */

.c-btn-round {
  border-radius: 12px !important;
}

.c-c-primary {
  background-color: #d63b30 !important;
  border: 0px !important;
}

.c-text-primary {
  color: #d63b30 !important;
}

.c-fw500 {
  font-weight: 500;
}

/* scrollbar */
/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 10px 10px transparent;
  border: solid 3px transparent; */
  background-color: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px #d63b30;
  border: solid 3px transparent;
  border-radius: 12px;
}

.clickable {
  cursor: pointer;
}
</style>
