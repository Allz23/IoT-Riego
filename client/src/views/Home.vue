<template>
  <b-container>
    <div class="home">
      <img
        alt="App logo"
        src="../assets/img/IoT - Riego (Prueba).svg"
        width="300"
        height="300"
        class="my-3"
      />
      <HelloWorld msg="¡Bienvenido al sistema de prueba!" />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  title: "IoT Riego | Principal",
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped></style>
