<template>
  <div id="app">
    <Page user="Arunstop" />
    <HelloWorld msg="Welcome to Your Vue.js App" kekw="This is Risitas"/>
    <Alert />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Page from "./stories/Page.vue";
import Alert from "./components/Alert.vue";


export default {
  name: "App",
  components: {
    HelloWorld,
    Page,
    Alert
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
