// Las mutaciones actualizan el estado de la aplicacion
export default {
  datosUsuario: (state, payload) => {
    state.usuario = payload;
    state.sesion = true;
  },
  removerUsuario: state => {
    state.usuario = {};
    state.sesion = false;
  }
};
