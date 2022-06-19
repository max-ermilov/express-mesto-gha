const validateSignIn = require('./validators/validateSignIn');
const validateSignUp = require('./validators/validateSignUp');
const validateUserAvatar = require('./validators/validateUserAvatar');
const validateUserById = require('./validators/validateUserById');
const validateUserUpdate = require('./validators/validateUserUpdate');
const validateCardCreate = require('./validators/validateCardCreate');
const validateCardId = require('./validators/validateCardId');
const auth = require('./auth');

module.exports = {
  validateSignIn,
  validateSignUp,
  validateUserAvatar,
  validateUserById,
  validateUserUpdate,
  validateCardCreate,
  validateCardId,
  auth,
};
