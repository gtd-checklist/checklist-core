const express = require('express');
const nanoid = require('nanoid');

const router = express.Router();

const habitsData = {
  date: 'Wed Dec 12 2018 00:00:00 GMT+0300',
  habits: [
    {
      id: nanoid(),
      name: 'Ранний подъем',
      description: 'Подъем до 7 утра',
      isNumerical: false,
      repeat: ['пн', 'вт', 'ср', 'чт', 'пт'],
      done: 'true'
    },
    {
      id: nanoid(),
      name: 'Тренировка',
      description: 'Тренажерный зал “Пушкин” в 12:00',
      isNumerical: false,
      repeat: ['вт', 'чт'],
      done: 'false'
    },
    {
      id: nanoid(),
      name: 'Прочитать 20 страниц',
      description: 'Книга Клиновский “Юзабилити”',
      isNumerical: true,
      repeat: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
      successCriteria: {
        number: 2,
        condition: 'LTE'
      },
      done: 'false'
    }
  ]
};

router.get('/', (req, res, next) => {
  res.send(habitsData);
  return next();
});

router.options('/', (req, res) => res.sendStatus(200));

router.post('/', (req, res, next) => {
  const newHabit = req.body;
  newHabit.id = nanoid();
  habitsData.habits.push(newHabit);

  res.send(newHabit);
  return next();
});

module.exports = {
  router
};
