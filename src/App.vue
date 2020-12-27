<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import mixins from './plugins/mixins'
export default {
  name: 'App',
  mixins : [mixins],
  watch: mixins.pageTitleWatcher
}
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body {
  width: 100% !important;
  height: 100% !important;
}

body {
  margin: 0px;
  font-family: Rubik, sans-serif !important;
  color: #222b45;
  font-size: 16px;
  line-height: 24px;
  overflow: auto;
}

#app {
  font-family: Rubik, sans-serif !important;
  /* font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /* 100 viewport height */
  min-height: 100vh; 
  background-color: #f5f6f8;
  display: flex;
  /* removed animation because sometimes it lagged */
  animation: fade-in 1.2s;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  30%{
    opacity: 0.3;
  }
  60% {
    opacity: 0.6;
  }
  90%{
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}

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

/* body:hover{
  overflow: auto;
} */

.clickable {
  cursor: pointer;
}

.logo {
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
}

.c-c-bg{
  background-color: #f5f6f8;
}

.c-bg-translucent{
  background-color: rgba(245,246,248,0.6);
}
</style>
