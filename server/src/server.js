// Modulos a importar
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expSessions = require("express-session");
const mongoStore = require("connect-mongo")(expSessions);

// - Configuraciones
const app = express();
require("../config/database");

const PORT = process.env.PORT || 80;
app.use(express.static(__dirname + "/public/"));
app.set("port", PORT);

// - Middlewares
app.use(morgan("dev"));

app.use(
  expSessions({
    secret: "secretApp",
    saveUninitialized: false,
    resave: false,
    // Configuracion para almacenar la sesion en la base de datos
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Rutas
app.use(require("../routes/index"));

// Iniciamos el servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor activo en el puerto: ${PORT}`);
});
