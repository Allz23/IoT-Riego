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
          <b-nav-item :to="{ path: '/about' }" exact>Acerca De</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuario</em>
            </template>
            <b-dropdown-item href="#">Configuración</b-dropdown-item>
            <b-dropdown-item href="#">Salir</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#navBar ul.navbar-nav > li.nav-item > a.nav-link {
  border-bottom: 3px solid transparent;
}

#navBar ul.navbar-nav > li.nav-item > a.nav-link:hover {
  border-bottom: 3px solid white;
}
#navBar ul.navbar-nav > li.nav-item > a.nav-link.router-link-active {
  border-bottom: 3px solid white;
}
</style>
