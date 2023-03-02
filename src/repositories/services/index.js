const insertService = require("./insertService");
const selectServices = require("./selectServices");
const selectServiceById = require("./selectServiceById");
const deleteServiceById = require("./deleteServiceById");
const updateServiceById = require("./updateServiceById");
const insertServiceFile = require("./insertServiceFile");
const deleteServiceFile = require("./deleteServiceFile");
module.exports = {
  insertService,
  selectServices,
  selectServiceById,
  deleteServiceById,
  updateServiceById,
  insertServiceFile,
  deleteServiceFile,
};
