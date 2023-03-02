const { selectServiceById } = require("../../repositories/services");

const getService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await selectServiceById(id);

    res.status(200).send({ status: "ok", data: service });
  } catch (error) {
    next(error);
  }
};

module.exports = getService;
