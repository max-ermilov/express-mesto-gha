const { celebrate, Joi } = require('celebrate');

const validateUserAvatar = function (req, res, next) {
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().required().pattern(/^https?:\/\/(www\.)?[a-zA-Z\d-]+\.[\w\d\-.~:/?#[\]@!$&'()*+,;=]{2,}#?$/),
    }),
  });
  next();
};

module.exports = validateUserAvatar;
