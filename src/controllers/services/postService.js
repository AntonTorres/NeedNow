const {
  insertService,
  insertServiceFile,
} = require("../../repositories/services");
const { postServiceSchema } = require("../../schemas/services");
const processAndSave = require("../../utils/processAndSave");

const postService = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    await postServiceSchema.validateAsync(req.body);

    const { tittle, description, resolve } = req.body;

    const insertedServiceId = await insertService({
      tittle,
      description,
      userId,
      resolve,
    });

    let fileName = null;
    if (req.files && req.files.files) {
      const file = req.files.files;
      fileName = await processAndSave(file.data);
      insertedFileId = await insertServiceFile(fileName, insertedServiceId);
    }

    res.status(201).send({
      status: "ok",
      data: {
        id: insertedServiceId,
        tittle,
        description,
        userId,
        files: insertedFileId,
        resolve,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = postService;
