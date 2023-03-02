const { serviceIdSchema } = require("../../schemas/services");
const { insertComment } = require("../../repositories/comments");
const { selectServiceById } = require("../../repositories/services");
const generateError = require("../../utils/generateError");

const postComment = async (req, res, next) => {
  try {
    const { id: serviceId } = req.params;

    await serviceIdSchema.validateAsync(serviceId);

    const service = await selectServiceById(serviceId);

    if (!service) {
      throw generateError("El servicio que intentas comentar no existe", 404);
    }

    const loggedUserId = req.auth.id;

    const { comment } = req.body;
    await insertComment(comment, serviceId, loggedUserId);

    res.status(200).send({
      status: "ok",
      message: "Comentario creado correctamente.",
      data: { comment },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = postComment;
