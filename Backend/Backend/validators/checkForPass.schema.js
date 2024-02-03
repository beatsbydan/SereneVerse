const Joi = require("joi");

module.exports.checkPassSchema = Joi.object({
  password: Joi.string().required(),
});
