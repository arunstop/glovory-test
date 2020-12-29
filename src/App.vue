<template>
  <div id="app">
    <transition 
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    >
    <router-view/>
    </transition>
  </div>
</template>

<script>
import mixins from './plugins/mixins'
export default {
  name: 'App',
  mixins : mixins,
  watch: mixins.pageTitleWatcher
}
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root{
  --animate-duration: 300ms !important;
  
}

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

.animate__animated.animate__fadeIn {
  --animate-duration: 150ms !important;
}
.animate__animated.animate__fadeOut {
  --animate-duration: 150ms !important;
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
/* giving toast and animation */
.b-toast{
  animation: bounceIn ; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 300ms; /* don't forget to set a duration! */
}

/* giving modal and animation */
.modal-content{
  animation: zoomInUp ; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 300ms; /* don't forget to set a duration! */
}
</style>
