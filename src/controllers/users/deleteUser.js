const generateError = require("../../utils/generateError");
const { selectUserById, deleteUserById } = require("../../repositories/users");
const { userIdSchema } = require("../../schemas/users");

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await userIdSchema.validateAsync(id);

    const user = await selectUserById(id);

    if (!user) {
      generateError("El usuario no existe.", 400);
    }

    const logedUserId = req.auth.id;

    if (user.id !== logedUserId) {
      generateError("No tienes permiso para eliminar este usuario.", 401);
    }

    await deleteUserById(id);

    res
      .status(200)
      .send({ status: "ok", message: "Usuario eliminado correctamente." });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteUser;
