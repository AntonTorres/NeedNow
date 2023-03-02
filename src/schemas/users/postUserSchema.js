const Joi = require("joi");

const postUserSchema = Joi.object({
  name: Joi.string().min(4).max(500).required(),
  password: Joi.string().min(8).max(500).required(),
  email: Joi.string().min(15).max(500).required(),
  biography: Joi.string().min(20).max(2500),
  file: Joi.string().allow(null),
});

module.exports = postUserSchema;
