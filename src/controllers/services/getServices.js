const { selectServices } = require("../../repositories/services");

const getServices = async (req, res, next) => {
  try {
    const service = await selectServices();

    res.status(200).send({ status: "ok", data: service });
  } catch (error) {
    next(error);
  }
};

module.exports = getServices;
