// Modelo para cada electrovalvula
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const valvulaSchema = new Schema({
  nombre: { type: String, required: true },
  automatico: { type: Boolean, required: true },
  encendido: { type: Boolean, required: true }
});

// ---------------------------------------------------------
module.exports = model("Valvula", valvulaSchema, "Valvulas");
