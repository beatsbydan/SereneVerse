const Joi = require("joi");

module.exports.otpSchema = Joi.object({
  otp: Joi.number().required(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "ng", "net"] },
    }),
});
