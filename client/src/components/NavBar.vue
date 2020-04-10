<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" id="navBar">
      <b-navbar-brand>
        <img
          src="../assets/img/IoT - Riego (NavBar).svg"
          alt="IoT"
          height="40"
          width="40"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ path: '/' }" exact>Principal</b-nav-item>
          <b-nav-item :to="{ path: '/about' }" exact v-if="sesion"
            >Válvulas</b-nav-item
          >
        </b-navbar-nav>
        <!-- TODO: Mostrar ciertos items cuando el usuario inicie sesión -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="sesion">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{ usuario.nombre }}</em>
            </template>
            <b-dropdown-item href="#">
              <b-icon-gear></b-icon-gear>
              Configuración
            </b-dropdown-item>
            <b-dropdown-item @click="cerrarSesion">
              <!-- <b-icon-x-circle></b-icon-x-circle> -->
              <b-icon icon="power"></b-icon>
              Salir
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item :to="{ path: '/login' }" exact v-else
            >Inicio de sesión</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from "vuex";
  // Importamos las acciones del módulo "usuarios"
  const {
    mapState: usuarioState,
    mapActions: usuarioActions
  } = createNamespacedHelpers("usuarios");

  export default {
    computed: {
      ...usuarioState(["usuario", "sesion"])
    },
    methods: {
      ...usuarioActions(["cerrarSesion"])
    }
  };
</script>

<style lang="scss">
  // #navBar ul.navbar-nav > li.nav-item > a.nav-link {
  //   border-bottom: 3px solid transparent;
  // }

  // #navBar ul.navbar-nav > li.nav-item > a.nav-link:hover {
  //   border-bottom: 3px solid white;
  // }
  // #navBar ul.navbar-nav > li.nav-item > a.nav-link.router-link-active {
  //   border-bottom: 3px solid white;
  // }
</style>
