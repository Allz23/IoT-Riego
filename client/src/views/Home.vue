<template>
  <b-container class="my-auto">
    <div class="home">
      <b-row align-h="center" align-v="center">
        <b-col cols="6">
          <img
            alt="App logo"
            src="../assets/img/IoT - Riego (Prueba).svg"
            width="300"
            height="300"
            class="my-3"
          />
        </b-col>

        <b-col cols="6" align-v="center" class="mt-2">
          <template v-if="sesion">
            <h3>Que bueno tenerte por acá, {{ usuario.nombre }}.</h3>
          </template>

          <template v-else>
            <h1>¡Bienvenid@ al sistema de prueba!</h1>
            <p>
              La idea de ésta app es comprobar el correcto funcionamiento de la
              comunicación del Arduino Mega con el servidor, para poder pasar a
              otra fase de desarrollo.
            </p>

            <p>
              Si es un usuario registrado, por favor haga clic en el siguiente
              botón para dirigirse a la ventena de inicio de sesión.
            </p>

            <b-link :to="{ path: 'login' }" class="btn btn-outline-info"
              >Inicio de sesión</b-link
            >
          </template>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
  import { createNamespacedHelpers } from "vuex";
  // Importamos las acciones del módulo "usuarios"
  const { mapState: usuarioState } = createNamespacedHelpers("usuarios");

  export default {
    title: "IoT Nena | Principal",
    name: "Home",
    components: {},
    computed: {
      ...usuarioState(["usuario", "sesion"])
    }
  };
</script>

<style lang="scss" scoped></style>
