const logedUser = require("./logedUser");

const logOut = async (req, res, next) => {
  try {
    const userId = req.auth.id;
    const user = await logedUser(userId);

    if (user) {
      await closeSession(req, res, next);
      res
        .status(200)
        .send({ status: "ok", message: "Sesión cerrada correctamente" });
    } else {
      res
        .status(401)
        .send({ status: "error", message: "No hay una sesión iniciada" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = logOut;
