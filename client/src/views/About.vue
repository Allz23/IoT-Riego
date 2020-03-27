<template>
  <div class="about">
    <b-container class="justify-content-center">
      <!-- Título -->
      <b-row class="my-3">
        <b-col cols="12">
          <h1>Listado de electrovalvulas y su estado actual</h1>
        </b-col>
      </b-row>

      <b-row align-h="center">
        <!-- Área de informacion de electrovalvulas -->
        <!-- Tabla -->
        <b-col cols="6">
          <b-table
            striped
            hover
            :items="valvulas"
            class="mt-3 table-text"
          ></b-table>
        </b-col>

        <!-- Formulario para ñadir electrovalvulas -->
        <b-col cols="6">
          <b-row align-h="left">
            <b-col cols="4">
              <b-button
                class="my-3"
                @click="aggValvula"
                variant="outline-success"
                >Añadir válvula</b-button
              >
            </b-col>
          </b-row>

          <b-row align-h="center">
            <b-col cols="12">
              <!-- Formulario para el nombre de la valvula -->
              <b-row align-h="center">
                <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label-align-sm="right"
                  label="Nombre:"
                  label-for="input-horizontal"
                  name="Nombre"
                  v-model="nombreValvula"
                  placeholder="Valvula X"
                >
                  <b-form-input id="input-horizontal"></b-form-input>
                </b-form-group>
              </b-row>
              <!-- Checkboxes -->
              <b-row align-h="center">
                <b-col cols="6">
                  <b-form-checkbox
                    class="mb-2 mr-sm-2 mb-sm-0 mx-2"
                    name="encendido"
                    v-model="on"
                    value="true"
                    unchecked-value="false"
                    >¿Encendida?</b-form-checkbox
                  >
                </b-col>

                <b-col cols="6">
                  <b-form-checkbox
                    class="mb-2 mr-sm-2 mb-sm-0 mx-2"
                    name="automatico"
                    v-model="auto"
                    value="true"
                    unchecked-value="false"
                    >¿Automática?</b-form-checkbox
                  >
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <!-- Fin de la fila principal -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
const axiosInstance = axios.create({
  baseURL: `http://localhost:80`,
  withCredentials: true,
  headers: {
    credentials: "same-origin"
  }
});
export default {
  title: "IoT Riego | Acerca De",
  data() {
    return {
      valvulas: [],
      auto: "false",
      on: "false",
      nombreValvula: ""
    };
  },
  computed: {},
  methods: {
    async aggValvula() {
      await axiosInstance({
        method: "post",
        url: "/aggvalvula",
        data: qs.stringify({
          nombre: this.nombreValvula,
          encendido: this.on,
          automatico: this.auto
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8"
        }
      });
    }
  },
  async created() {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/",
        headers: {
          credentials: "same-origin"
        }
      });
      if (response.data) {
        this.$data.valvulas = response.data.valvulas;
      }
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style lang="scss" scoped>
.table-text {
  font-size: 0.8em;
}
</style>
