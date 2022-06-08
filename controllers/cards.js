const Card = require('../models/card');

module.exports.getAllCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: `Ошибка сервера: ${err.mesage}` }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: `Ошибка валидации имени или ссылки: ${err.message}` });
        return;
      }
      res.status(500).send({ message: err.message });
    });
};

module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;

  if (cardId.length !== 24) {
    res.status(400).send({ message: 'Переданы некорректные данные.' });
    return;
  }

  Card.findByIdAndRemove(cardId)
    .then((card) => {
      if (card === null) {
        res.status(404).send({ message: 'Карточка с указанным id не найдена.' });
        return;
      }
      res.status(200);
      res.send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Указан некорректный id.' });
        return;
      }
      res.status(500).send({ message: err.message });
    });
};
