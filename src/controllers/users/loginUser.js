const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateError = require("../../utils/generateError");
const { selectUserByEmail } = require("../../repositories/users");

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await selectUserByEmail(email);

    if (!user) {
      generateError("Email o contraseña incorrectos.", 400);
    }

    const isPassOk = await bcrypt.compare(password, user.password);

    if (!isPassOk) {
      generateError("Email o contraseña incorrectos.", 400);
    }

    const tokenP = { id: user.id };

    const token = jwt.sign(tokenP, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).send({ status: "ok", data: { token } });
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
