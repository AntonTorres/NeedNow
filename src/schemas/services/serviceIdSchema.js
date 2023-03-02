const Joi = require("joi");

const serviceIdSchema = Joi.number().positive().required();

module.exports = serviceIdSchema;
