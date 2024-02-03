const Joi = require("joi");

module.exports.loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "ng", "net"] },
    }),
});
