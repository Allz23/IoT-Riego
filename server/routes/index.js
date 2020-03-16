// Rutas principales de la API
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ mensaje: "Bienvenido al sistema." });
});

// Ruta de redirecionamiento para errores 404
router.get("*", (req, res) => {
  res.json({ mensaje: "Ha ocurrido un problema con el servidor." });
});

// Exportamos las rutas ----------------------------------------
module.exports = router;
