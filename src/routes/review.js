const express = require('express');

const router = express.Router();

const review = {
  date: 'Mon Nov 26 2018 20:14:32 GMT+0300',
  habits: [
    {
      id: 1,
      name: 'Ранний подъем',
      description: 'Подъем до 7 утра',
      isNumerical: false
    },
    {
      id: 2,
      name: 'Тренировка',
      description: 'Тренажерный зал “Пушкин” в 12:00',
      isNumerical: true,
      successCriteria: {
        number: 2,
        condition: 'LTE'
      }
    },
    {
      id: 3,
      name: 'Прочитать 20 страниц',
      description: 'Книга Клиновский "Юзабилити"',
      isNumerical: true,
      successCriteria: {
        number: 20,
        condition: 'GTE'
      }
    }
  ]
};

const reviews = [];

router.get('/', (req, res, next) => {
  res.status(200);
  res.send(review);
  return next();
});

router.options('/', (req, res) => res.status(200));

router.post('/', (req, res, next) => {
  reviews.push(req.body);
  res.status(200);
  return next();
});

module.exports = {
  router
};
