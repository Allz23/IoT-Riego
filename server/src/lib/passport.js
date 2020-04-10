const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const Usuario = require("../models/Usuario");
// Validacion de la sesion del usuario
passport.use(
  "localLogin",
  new localStrategy(
    {
      usernameField: "usuario",
      passwordField: "contraseña"
    },
    async (usuario, contraseña, done) => {
      const user = await Usuario.findOne({ usuario: usuario });

      if (!user) {
        return done(null, false);
      } else {
        if (user.contraseña === contraseña) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (_id, done) => {
  await Usuario.findById(_id, (err, user) => {
    if (err) {
      console.log(err);
      return done(null, false);
    } else {
      return done(null, user);
    }
  });
});
