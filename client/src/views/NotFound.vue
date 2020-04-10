<template>
  <main class="not-found">
    <img
      alt="404"
      src="../assets/img/404 - UFO.svg"
      width="400"
      height="300"
      class="my-2"
    />
    <h1>Página no encontrada.</h1>
    <p class="more-info">
      Lo sentimos, pero no encontramos la página que está buscando.<br />
      Quizás fue movida a otra dirección (¡o secuestrada!).<br />
      Revise la dirección o haga clic debajo para volver a la página principal.
    </p>
    <div class="actions">
      <router-link
        tag="a"
        :to="{ name: 'Home' }"
        class="btn btn-outline-success"
        >Página principal</router-link
      >
    </div>
  </main>
</template>

<script>
  export default {
    title: "IoT Riego | Error 404"
  };
</script>

<style></style>
