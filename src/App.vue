<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "@/assets/font.css";

body,
#app {
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  font-family: "Y_Spotlight" !important;
}
h1,
span,
p,
button {
  font-family: "Y_Spotlight" !important;
}
</style>