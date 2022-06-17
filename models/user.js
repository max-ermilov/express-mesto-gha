const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Недопустимый формат адреса почты',
    },
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    minlength: [2, 'Минимальная длина свойства {PATH} должна быть 2. Передано {VALUE}. '],
    maxlength: [30, 'Максимальная длина свойства {PATH} должна быть 30. Передано {VALUE}. '],
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    minlength: [2, 'Минимальная длина свойства {PATH} должна быть 2. Передано {VALUE}. '],
    maxlength: [30, 'Максимальная длина свойства {PATH} должна быть 30. Передано {VALUE}. '],
    default: 'Исследователь',
  },
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Недопустимый формат ссылки',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
