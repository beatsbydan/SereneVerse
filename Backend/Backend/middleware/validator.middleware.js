const Joi = require("joi")

const validator = (schema)=>async (req, res, next)=>{
    try {
        const { body } = req;
        const value = await schema.validateAsync(body);
        next();
      } catch (error) {
        res.status(400)
        next(error)
      }
}

module.exports = validator