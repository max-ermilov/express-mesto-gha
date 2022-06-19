const { celebrate, Joi } = require('celebrate');

const validateUserUpdate = function (req, res, next) {
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
    }),
  });
  next();
};

module.exports = validateUserUpdate;
