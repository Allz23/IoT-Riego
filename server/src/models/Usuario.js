// Modelo para cada usuario en la base de datos
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  usuario: { type: String, required: true },
  nombre: { type: String },
  contraseña: { type: String, required: true },
  admin: { type: Boolean },
  departamento: { type: String },
  telefono: { type: String },
  correo: { type: String }
});

let Usuario = mongoose.model("Usuario", usuarioSchema, "usuarios");

module.exports = Usuario;
