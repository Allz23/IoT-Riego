// Rutas principales de la API
const { Router } = require("express");

const router = Router();
const Valvula = require("../models/Valvulas");

router.get("/", async (req, res) => {
  await Valvula.find({}, function(error, valvulas) {
    if (error) {
      console.log(error);
    }

    res.json({ mensaje: "Bienvenido al sistema.", valvulas: valvulas });
  });
});

// Rutas pertinentes a la Valvula 1
// router.post();

// Ruta de redirecionamiento para errores 404
// router.get("*", (req, res) => {
//   res.json({ mensaje: "Ha ocurrido un problema con el servidor." });
// });

// Exportamos las rutas ----------------------------------------
module.exports = router;
