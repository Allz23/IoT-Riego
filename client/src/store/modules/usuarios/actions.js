// Las acciones son funciones asincronas que llaman mutaciones
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `http://localhost:80`,
  withCredentials: true,
  headers: {
    credentials: "same-origin",
  },
});

export default {
  aggInfoUsuario: ({ commit }, payload) => {
    commit("DATOS_USUARIO", payload);
  },

  cerrarSesion: async ({ commit }) => {
    await axiosInstance({
      method: "post",
      url: "/logout",
    });

    commit("REMOVER_USUARIO");
  },
};
