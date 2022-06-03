const User = require('../models/user');

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send({ data: users });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.getUserById = (req, res) => {
  const userID = req.params.userId;
  User.findById(userID)
    .then((user) => {
      if (!user) {
        // return res.status(404).send({ message: 'Пользователь не найден' });
        res.status(404).send({ message: 'Пользователь не найден' });
        return;
      }
      res.status(200).send({ user });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  if (!name || !about || !avatar) {
    res.status(400).send({
      message: 'Отсутствуют или неверно переданы одно или несколько полей: name, about, avatar',
    });
    return;
  }

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
