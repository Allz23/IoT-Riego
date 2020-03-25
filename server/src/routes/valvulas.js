// Rutas para el control/verificacion de las válvulas en la API
const { Router } = require("express");

const router = Router();
const Valvula = require("../models/Valvulas");

router.post("/aggvalvula", async (req, res) => {
  try {
    const { nombre, encendido, auto } = req.body;
    console.log({ nombre, encendido, auto });
    return res.json({ response: "Valvula añadida." });
  } catch (error) {
    res.status(403).send(error.message);
  }
  res.json({ mensaje: "¡Válvula añadida!" });
});

// Exportamos las rutas ----------------------------------------
module.exports = router;
