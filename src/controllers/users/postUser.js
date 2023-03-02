const bcrypt = require("bcrypt");
const generateError = require("../../utils/generateError");
const { selectUserByEmail, insertUser } = require("../../repositories/users");
const { postUserSchema } = require("../../schemas/users");
const processAndSavePhoto = require("../../utils/processAndSavePhoto");

const createUser = async (req, res, next) => {
  try {
    await postUserSchema.validateAsync(req.body);

    const { name, password, email, biography } = req.body;

    const userWithSameEmail = await selectUserByEmail(email);

    if (userWithSameEmail) {
      generateError("Ese email ya está registrado", 400);
    }

    const encryptedPass = await bcrypt.hash(password, 10);

    let photoName = null;
    if (req.files && req.files.photo) {
      const photo = req.files.photo;
      photoName = await processAndSavePhoto(photo.data);
    }

    const insertId = await insertUser({
      name,
      encryptedPass,
      email,
      biography,
      photo: photoName,
    });

    res.status(200).send({
      status: "ok",
      data: { id: insertId, name, email, biography, photo: photoName },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;
