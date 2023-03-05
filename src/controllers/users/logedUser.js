const jwt = require("jsonwebtoken");
const { selectUserById } = require("../../repositories/users");

const logedUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await selectUserById(id);

    const tokenP = { id: user.id };

    const token = jwt.sign(tokenP, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).send({ status: "ok", data: { token, user } });
  } catch (error) {
    next(error);
  }
};

module.exports = logedUser;
