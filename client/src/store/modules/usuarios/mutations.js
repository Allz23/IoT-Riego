// Las mutaciones actualizan el estado de la aplicacion
export default {
  DATOS_USUARIO: (state, payload) => {
    state.usuario = payload;
    state.sesion = true;
  },
  REMOVER_USUARIO: (state) => {
    state.usuario = {};
    state.sesion = false;
  },
};
