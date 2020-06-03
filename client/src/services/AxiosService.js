// Dado que el navegador solo necesita una instancia de Axios, la creamos en este archivo. E importamos las llamdas que necesite la app comom funciones.
import axios from "axios";
import qs from "qs";

// Insta
const axiosCall = axios.create({
  baseURL: `http://localhost:80`,
  withCredentials: true,
  headers: {
    credentials: "same-origin",
  },
});

// API calls
export default {
  // GET Calls --------------------------------------------
  async getMainPage() {
    const response = await axiosCall({
      method: "GET",
      url: "/",
      headers: {
        credentials: "same-origin",
      },
    });

    console.log(response.data);
    return response.data;
  },
  // POST Calls --------------------------------------------
  async postLogin(name, password) {
    const respuesta = await axiosCall({
      method: "post",
      url: "/login",
      data: qs.stringify({
        usuario: name,
        contraseña: password,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    });

    return respuesta.data;
  },

  async aggValvula(nombre, on, auto) {
    await axiosCall({
      method: "post",
      url: "/aggvalvula",
      data: qs.stringify({
        nombre: nombre,
        encendido: on,
        automatico: auto,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    });
  },
};
