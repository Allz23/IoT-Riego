// Modelo para cada electrovalvula
const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const valvulaSchema = new Schema({
  nombre: { type: String, required: true },
  encendido: { type: Boolean, required: true },
  automatico: { type: Boolean, required: true }
});

let Valvula = mongoose.model("Valvula", valvulaSchema, "valvulas");

// ---------------------------------------------------------
module.exports = Valvula;
