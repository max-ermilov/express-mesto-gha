const router = require('express').Router();

const { validateUserById, validateUserUpdate, validateUserAvatar } = require('../middlewares');
const {
  getAllUsers,
  getUserById,
  getCurrentUser,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', validateUserById, getUserById);

router.patch('/me', validateUserUpdate, updateUser);
router.patch('/me/avatar', validateUserAvatar, updateUserAvatar);

module.exports = router;
