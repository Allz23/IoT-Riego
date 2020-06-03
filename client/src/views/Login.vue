<template>
  <div>
    <b-container>
      <b-row align-v="center">
        <b-col cols="6">
          <img
            alt="App logo"
            src="../assets/img/IoT - Riego (Prueba).svg"
            width="300"
            height="300"
            class="my-3"
          />
        </b-col>

        <b-col cols="6">
          <h3 class="mb-5 my-3">
            Ingrese la información solicitada para ingresar al sistema.
          </h3>
          <b-form @submit.prevent="ingresoUsuario">
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              description="Ingrese su nombre de usuario."
              label="Usuario:"
              label-for="nombreHorizontal"
            >
              <b-form-input
                id="nombreHorizontal"
                name="usuario"
                v-model="formUsuario.name"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="4"
              label-cols-lg="3"
              description="Ingrese su contraseña."
              label="Contraseña:"
              label-for="passHorizontal"
            >
              <b-form-input
                id="passHorizontal"
                name="password"
                v-model="formUsuario.password"
              ></b-form-input>
            </b-form-group>

            <b-row class="mt-3" align-h="end">
              <b-button type="submit" variant="outline-primary" class="mx-2"
                >Ingresar</b-button
              >
              <b-button type="reset" variant="outline-danger" class="mx-2"
                >Borrar</b-button
              >
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import axiosService from "../services/AxiosService";
  import { createNamespacedHelpers } from "vuex";
  // Importamos las acciones del módulo "usuarios"
  const { mapActions: usuarioActions } = createNamespacedHelpers("usuarios");

  export default {
    title: "IoT Nena | Login",
    data() {
      return {
        formUsuario: {
          name: "",
          password: "",
        },
      };
    },
    methods: {
      ...usuarioActions(["aggInfoUsuario"]),
      async ingresoUsuario() {
        const { name, password } = this.formUsuario;

        try {
          const dataUsuario = await axiosService.postLogin(name, password);

          const {
            _id,
            usuario,
            nombre,
            admin,
            departamento,
            telefono,
            correo,
          } = dataUsuario;

          const payload = {
            _id,
            usuario,
            nombre,
            admin,
            departamento,
            telefono,
            correo,
          };
          // Invocamos una accion para actualizar el estado de la app
          this.aggInfoUsuario(payload);

          this.formUsuario = {
            nombre: "",
            contraseña: "",
          };

          this.$router.replace(
            this.$route.params.wantedRoute || { name: "Home" }
          );
        } catch (error) {
          console.error(`Ha ocurrido un error: ${error}`);
        }
      },
    },
  };
</script>

<style></style>
