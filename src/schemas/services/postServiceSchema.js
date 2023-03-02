const Joi = require("joi");

const postServiceSchema = Joi.object({
  tittle: Joi.string().min(4).max(500).required(),
  description: Joi.string().min(4).max(2500).required(),
  resolve: Joi.number().integer().min(0).max(1),
});

module.exports = postServiceSchema;
