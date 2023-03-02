const generateError = require("../../utils/generateError");
const {
  selectCommentBySerAndUser,
  updateComment,
} = require("../../repositories/comments");
const { selectServiceById } = require("../../repositories/services");
const { serviceIdSchema } = require("../../schemas/services");

const putComment = async (req, res, next) => {
  try {
    const { id: serviceId } = req.params;

    await serviceIdSchema.validateAsync(serviceId);

    const service = await selectServiceById(serviceId);

    if (!service) {
      generateError(
        "El servicio del que intentas editar el comentario no existe",
        404
      );
    }

    const userId = req.auth.id;

    const comment = await selectCommentBySerAndUser(serviceId, userId);

    if (comment) {
      const newComment = req.body.comment.toString();
      await updateComment(newComment, comment.id, userId);
      res.status(200).send({
        status: "ok",
        message: "Comentario modificado correctamente.",
        data: { comment: newComment },
      });
    } else {
      generateError(
        "No has comentado este servicio o no estás autorizado para editar este comentario.",
        400
      );
    }
  } catch (error) {
    next(error);
  }
};

module.exports = putComment;
