import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Configuracion de Boostrap-Vue --------------------------
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Configuración de los mixins globales -------------------
import mixinTitulo from "./mixins/changeTitle";
Vue.mixin(mixinTitulo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
