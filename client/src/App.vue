<template>
  <div id="app">
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";
  export default {
    components: {
      NavBar
    }
  };
</script>
<style lang="scss">
  @import "./assets/css/Animate.css";
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
  #app {
    font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
