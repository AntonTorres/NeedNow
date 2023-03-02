const { selectUserById } = require("../../repositories/users");

const logedUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await selectUserById(id);

    res.status(200).send({ status: "ok", data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = logedUser;
