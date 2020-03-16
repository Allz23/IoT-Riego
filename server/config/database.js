// Configuraciones para la conexión con la base de datos
const mongoose = require("mongoose");

const MONGODB_URI = `mongodb://127.0.0.1/domoticaNena`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log("MongoDB en línea."))
  .catch(err => console.error(`Ha ocurrido el siguiente error: ${err}`));
