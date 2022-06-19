const { celebrate, Joi } = require('celebrate');

function validateCardId(req, res, next) {
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().hex().length(24),
    }),
  });
  next();
}

module.exports = validateCardId;
