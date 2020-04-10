import Vue from "vue";
import VueRouter from "vue-router";
// Importacion de vistas
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";
// Importacion de componentes

// Importaciones varias
// import estadoUsuario from "../store/modules/usuarios/state";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { visitante: true }
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// Guardias de navegacion en las rutas
// router.beforeEach((to, from, next) => {
//   // Es recomendado usar este metodo para verificar las rutas
//   if (to.matched.some(r => r.meta.privada) && !estadoUsuario.usuario) {
//     next({
//       name: "Login",
//       // Usado para redirigir al usuario a su ruta deseada
//       params: {
//         wantedRoute: to.fullPath
//       }
//     });
//     return;
//   }

//   if (to.matched.some(r => r.meta.visitante) && estadoUsuario.usuario) {
//     next({ name: "Home" });
//     return;
//   }
//   next();
// });

export default router;
