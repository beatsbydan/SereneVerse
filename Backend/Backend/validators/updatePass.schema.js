const Joi = require("joi");

module.exports.checkPassSchema = Joi.object({
  currPass: Joi.string().required(),
  newPass: Joi.string().required(),
});
