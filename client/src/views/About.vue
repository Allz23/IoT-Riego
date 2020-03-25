<template>
  <div class="about">
    <b-container class="justify-content-center">
      <!-- Título -->
      <b-row>
        <b-col cols="12">
          <h1>Listado de electrovalvulas y su estado actual</h1>
        </b-col>
      </b-row>

      <!-- Área de botones -->
      <b-row align-h="center">
        <b-col cols="3">
          <b-button class="my-3" @click="aggValvula">Añadir válvula</b-button>
        </b-col>
      </b-row>

      <!-- Tabla -->
      <b-row>
        <b-col>
          <b-table striped hover :items="valvulas" class="mt-3"></b-table>
        </b-col>
      </b-row>

      <b-row align-h="center">
        <b-col cols="12">
          <b-form inline>
            <label class="sr-only" for="inline-form-input-name">Nombre:</label>
            <b-input
              id="inline-form-input-name"
              class="mb-2 mr-sm-2 mb-sm-0 mx-2"
              placeholder="Vávlula X"
              name="Nombre"
              v-model="nombreValvula"
            ></b-input>

            <b-form-checkbox
              class="mb-2 mr-sm-2 mb-sm-0 mx-2"
              name="encendido"
              v-model="on"
              value="true"
              unchecked-value="false"
              >¿Encendida?</b-form-checkbox
            >

            <b-form-checkbox
              class="mb-2 mr-sm-2 mb-sm-0 mx-2"
              name="automatico"
              v-model="auto"
              value="true"
              unchecked-value="false"
              >¿Automático?</b-form-checkbox
            >

            <b-button variant="primary">Save</b-button>
          </b-form>
        </b-col>
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

<style></style>
