<template>
  <div id="app">
    <Header user="Arunstop" />
    <HelloWorld msg="Welcome to Your Vue.js App" kekw="This is Risitas" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./stories/Header.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  font-family: Rubik, sans-serif;
  color: #222b45;
  font-size: 16px;
  line-height: 24px;
}
</style>
