const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', { family: 4 })
  .catch((err) => {
    console.log('Не удалось подключиться к базе данных. Ошибка: ', err);
  });
app.use((req, res, next) => {
  req.user = {
    _id: '6299f24405d0fd675eeba048', // hardcoded userId
  };

  next();
});
app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

// app.use((req, res, next) => {
//   req.user = {
//     _id: '5d8b8592978f8bd833ca8133',
//   };
//
//   next();
// });

// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT);
