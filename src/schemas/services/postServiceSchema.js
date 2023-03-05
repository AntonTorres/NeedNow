const Joi = require("joi");

const postServiceSchema = Joi.object({
  tittle: Joi.string().min(4).max(500),
  description: Joi.string().min(4).max(2500),
  resolve: Joi.number().integer().min(0).max(1),
});

module.exports = postServiceSchema;
