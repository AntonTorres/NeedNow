const {
  selectServiceById,
  updateServiceById,
} = require("../../repositories/services");
const generateError = require("../../utils/generateError");

const putService = async (req, res, next) => {
  try {
    const { id } = req.params;

    const service = await selectServiceById(id);

    if (!service) {
      generateError(
        "El servicio que estás intentando modificar no existe.",
        400
      );
    }

    const logedUserId = req.auth.id;

    if (service.userId !== logedUserId) {
      generateError("No tienes permiso para modificar este servicio.", 401);
    }

    const { tittle, description, resolve } = req.body;

    if (!tittle && !description && !resolve) {
      generateError("Necesitas realizar una modificación.", 400);
    }

    await updateServiceById({ ...service, ...req.body });

    res.status(200).send({ status: "ok", data: { ...service, ...req.body } });
  } catch (error) {
    next(error);
  }
};

module.exports = putService;
