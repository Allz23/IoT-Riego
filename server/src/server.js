// Modulos a importar
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expSessions = require("express-session");

// - Configuraciones
const app = express();

const PORT = process.env.PORT || 80;
app.use(express.static(__dirname + "/public/"));
app.set("port", PORT);

// - Middlewares
app.use(morgan("dev"));

app.use(
  expSessions({
    secret: "secretApp",
    saveUninitialized: true,
    resave: true
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Iniciamos el servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor activo en el puerto: ${PORT}`);
});
