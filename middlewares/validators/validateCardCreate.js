const { celebrate, Joi } = require('celebrate');
const { regEx } = require('../../constants');

function validateCardCreate(req, res, next) {
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string().required().pattern(regEx),
    }),
  });
  next();
}

module.exports = validateCardCreate;
