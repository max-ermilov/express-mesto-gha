const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '{PATH} - обязательное поле. '],
    minlength: [2, 'Минимальная длина свойства {PATH} должна быть 2. Передано {VALUE}. '],
    maxlength: [30, 'Максимальная длина свойства {PATH} должна быть 30. Передано {VALUE}. '],
  },
  about: {
    type: String,
    required: [true, '{PATH} - обязательное поле. '],
    minlength: [2, 'Минимальная длина свойства {PATH} должна быть 2. Передано {VALUE}. '],
    maxlength: [30, 'Максимальная длина свойства {PATH} должна быть 30. Передано {VALUE}. '],
  },
  avatar: {
    type: String,
    required: [true, '{PATH} - обязательное поле. '],
  },
});

module.exports = mongoose.model('user', userSchema);
