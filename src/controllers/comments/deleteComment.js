const generateError = require("../../utils/generateError");
const {
  selectCommentBySerAndUser,
  deleteComment,
} = require("../../repositories/comments");
const { selectServiceById } = require("../../repositories/services");
const { serviceIdSchema } = require("../../schemas/services");

const deleteCommente = async (req, res, next) => {
  try {
    const { id: serviceId } = req.params;

    await serviceIdSchema.validateAsync(serviceId);

    const service = await selectServiceById(serviceId);

    if (!service) {
      generateError(
        "El servicio del que intentas eliminar el comentario no existe",
        404
      );
    }

    const loggedUserId = req.auth.id;

    const comment = await selectCommentBySerAndUser(serviceId, loggedUserId);

    if (comment) {
      await deleteComment(serviceId, loggedUserId);
    } else {
      generateError("No has comentado este servicio.", 400);
    }

    res
      .status(200)
      .send({ status: "ok", message: "Comentario eliminado correctamente." });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteCommente;
