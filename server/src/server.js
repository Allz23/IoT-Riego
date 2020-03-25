// Modulos a importar
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expSessions = require("express-session");
const mongoStore = require("connect-mongo")(expSessions);

// - Configuraciones
const app = express();
const mongodb_conn_module = require("./config/mongoDBConn");
let mongoDB = mongodb_conn_module.connect();

app.use(express.static(__dirname + "/public/"));

const PORT = process.env.PORT || 80;
app.set("port", PORT);
const SECRET = process.env.SECRET || "app_iot";
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:8080";

app.set("port", PORT);

const corsOptions = {
  origin: CLIENT_ORIGIN,
  credentials: true
};

// - Middlewares
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(cookieParser(SECRET));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  expSessions({
    secret: SECRET,
    saveUninitialized: false,
    resave: false,
    // Configuracion para almacenar la sesion en la base de datos
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
  })
);

// Rutas
app.use(require("./routes/index"));
app.use(require("./routes/valvulas"));

// Iniciamos el servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor activo en el puerto: ${PORT}`);
});
