const { celebrate, Joi } = require('celebrate');
const { regEx } = require('../../constants');

const validateSignUp = function (req, res, next) {
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().pattern(regEx),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  });
  next();
};

module.exports = validateSignUp;
