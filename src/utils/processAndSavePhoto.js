const sharp = require("sharp");
const uuid = require("uuid");
const path = require("path");

const processAndSavePhoto = async (imageBuffer) => {
  const image = sharp(imageBuffer);

  const imageMeta = await image.metadata();

  if (imageMeta.width > 320) {
    image.resize(320);
  }

  const imageName = `${uuid.v4()}.${imageMeta.format}`;

  const imagePath = path.join(__dirname, "..", "uploads/avatars", imageName);

  await image.toFile(imagePath);

  return imageName;
};

module.exports = processAndSavePhoto;
