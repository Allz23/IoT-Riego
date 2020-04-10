import Vue from "vue";
import Vuex from "vuex";

// Modulos de la tienda
import usuarios from "./modules/usuarios/index";
import valvulas from "./modules/valvulas/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    usuarios,
    valvulas
  }
});
