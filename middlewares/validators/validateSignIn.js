const { celebrate, Joi } = require('celebrate');

const validateSignIn = function (req, res, next) {
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  });
  next();
};

module.exports = validateSignIn;
