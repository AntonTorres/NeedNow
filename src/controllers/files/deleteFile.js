const generateError = require("../../utils/generateError");
const {
  selectFilesBySer,
  deleteFileById,
} = require("../../repositories/files");
const { selectServiceById } = require("../../repositories/services");
const { serviceIdSchema } = require("../../schemas/services");

const deleteFile = async (req, res, next) => {
  try {
    const { id: serviceId } = req.params;

    await serviceIdSchema.validateAsync(serviceId);

    const service = await selectServiceById(serviceId);

    if (!service) {
      throw generateError(
        "El servicio del que intentas eliminar el archivo no existe",
        404
      );
    }

    const loggedUserId = req.auth.id;
    if (loggedUserId !== service.userId) {
      throw generateError("No tienes permiso para eliminar ese archivo.", 401);
    }

    const file = await selectFilesBySer(serviceId);

    if (!file || file.length === 0) {
      throw generateError("El archivo que intentas eliminar no existe.", 400);
    }

    await deleteFileById(file.id);

    res
      .status(200)
      .send({ status: "ok", message: "Archivo eliminado correctamente." });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteFile;
