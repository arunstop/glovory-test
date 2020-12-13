<template>
  <div id="app">
    <img alt="KEKW" src="https://assets.website-files.com/5fafb178b3236f251c2ec605/5fafe519c3163b6fd26dd449_logo-color.svg" width="180">
    <HelloWorld msg="Welcome to Your Vue.js App" kekw="This is Risitas"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
