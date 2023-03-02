const generateError = require("../../utils/generateError");
const {
  selectServiceById,
  deleteServiceById,
} = require("../../repositories/services");
const { serviceIdSchema } = require("../../schemas/services");

const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;

    await serviceIdSchema.validateAsync(id);

    const service = await selectServiceById(id);

    if (!service) {
      generateError("El servicio que buscas no existe.", 400);
    }

    const logedUserId = req.auth.id;

    if (service.userId !== logedUserId) {
      generateError("No tienes permiso para eliminar este servicio.", 401);
    }

    await deleteServiceById(id);

    res
      .status(200)
      .send({ status: "ok", message: "Servicio eliminado correctamente." });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteService;
