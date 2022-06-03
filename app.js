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

app.use('/users', require('./routes/users'));

app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT);
