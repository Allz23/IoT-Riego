// Rutas para el control/verificacion de las válvulas en la API
const { Router } = require("express");

const router = Router();
const Valvula = require("../models/Valvulas");

router.post("/aggvalvula", async (req, res) => {
  try {
    const { nombre, encendido, automatico } = req.body;
    console.log({ nombre, encendido, automatico });
    const nuevaValvula = new Valvula({ nombre, encendido, automatico });
    await nuevaValvula.save();

    return res.json({ response: "Valvula añadida satisfactoriamente." });
  } catch (error) {
    return res.status(403).send(error.message);
  }
});

router.get("/valvulas", async (req, res) => {
  return res.json({ response: "Todas las válvulas." });
});

router.get("/valvula", async (req, res) => {
  return res.json({ response: "Una válvula." });
});
// Exportamos las rutas ----------------------------------------
module.exports = router;
