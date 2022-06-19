const { celebrate, Joi } = require('celebrate');

const validateUserById = function (req, res, next) {
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().length(24).hex().required(),
    }),
  });
  next();
};

module.exports = validateUserById;
