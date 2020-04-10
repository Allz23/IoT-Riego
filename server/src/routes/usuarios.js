const { Router } = require("express");
const passport = require("passport");

const router = Router();
const Usuario = require("../models/Usuario");
require("../lib/passport");

// Logueo del usuario
router.post(
  "/login",
  // (req, res, next) => {
  //   if (req.user) {
  //     res.status(403).json({ usuario: "No autorizado." });
  //   } else {
  //     next();
  //   }
  // },
  passport.authenticate("localLogin", { failWithError: true }),
  (req, res) => {
    return res.json({
      _id: req.user._id,
      nombre: req.user.nombre,
      usuario: req.user.usuario,
      admin: req.user.admin,
      departamento: req.user.departamento,
      telefono: req.user.telefono,
      correo: req.user.correo
    });
  },
  (err, req, res, next) => {
    res.status(403).send(err);
  }
);

// Cierre de sesión
router.post("/logout", (req, res) => {
  req.logOut();
  return res.status(200).json({ response: "Cierre de sesion confirmado." });
});

// Exportamos las rutas ----------------------------------------
module.exports = router;
