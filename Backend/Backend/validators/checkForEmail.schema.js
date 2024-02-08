const Joi = require("joi");

module.exports.checkEmailSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "ng", "net"] },
    }),
});
