const express = require('express');

const router = express.Router();

const habits = [
  {
    "month": 12,
    "weeks": [
      {
        "from": "Mon Dec 3 2018 00:00:00 GMT+0300",
        "to": "Sun Dec 9 2018 00:00:00 GMT+0300",
        "habits": [
          {
            "id": 1,
            "name": "Ранний подъем",
            "description": "Подъем до 7 утра",
            "plannedIn": [
              "Mon Nov 26 2018 00:00:00 GMT+0300",
              "Wed Nov 28 2018 00:00:00 GMT+0300",
              "Fri Nov 30 2018 00:00:00 GMT+0300"
            ],
            "resolvedIn": [
              "Mon Nov 26 2018 00:00:00 GMT+0300",
              "Wed Nov 28 2018 00:00:00 GMT+0300"
            ]
          },
          {
            "id": 2,
            "name": "Тренировка",
            "description": "Тренажерный зал “Пушкин” в 12:00",
            "plannedIn": [
              "Mon Nov 26 2018 00:00:00 GMT+0300",
              "Wed Nov 28 2018 00:00:00 GMT+0300",
              "Fri Nov 30 2018 00:00:00 GMT+0300"
            ],
            "resolvedIn": [
              "Mon Nov 26 2018 00:00:00 GMT+0300",
              "Fri Nov 30 2018 00:00:00 GMT+0300"
            ]
          },
        ]
      },
      {
        "from": "Mon Dec 10 2018 00:00:00 GMT+0300",
        "to": "Sun Dec 16 2018 00:00:00 GMT+0300",
        "habits": [
          {
            "id": 1,
            "name": "Ранний подъем",
            "description": "Подъем до 7 утра",
            "plannedIn": [
              "Mon Dec 10 2018 00:00:00 GMT+0300",
              "Sat Dec 15 2018 00:00:00 GMT+0300",
              "Sun Dec 16 2018 00:00:00 GMT+0300"
            ],
            "resolvedIn": [
              "Mon Dec 10 2018 00:00:00 GMT+0300",
              "Sun Dec 16 2018 00:00:00 GMT+0300"
            ]
          },
          {
            "id": 2,
            "name": "Тренировка",
            "description": "Тренажерный зал “Пушкин” в 12:00",
            "plannedIn": [
              "Mon Dec 10 2018 00:00:00 GMT+0300",
              "Sat Dec 15 2018 00:00:00 GMT+0300",
              "Sun Dec 16 2018 00:00:00 GMT+0300"
            ],
            "resolvedIn": [
              "Mon Dec 10 2018 00:00:00 GMT+0300",
              "Sun Dec 16 2018 00:00:00 GMT+0300"
            ]
          },
        ]
      },
      {
        "from": "Mon Dec 17 2018 00:00:00 GMT+0300",
        "to": "Sun Dec 23 2018 00:00:00 GMT+0300",
        "habits": [
          {
            "id": 1,
            "name": "Ранний подъем",
            "description": "Подъем до 7 утра",
            "plannedIn": [
              "Mon Dec 17 2018 00:00:00 GMT+0300",
              "Sun Dec 23 2018 00:00:00 GMT+0300"
            ],
            "resolvedIn": [
              "Mon Dec 17 2018 00:00:00 GMT+0300",
              "Sun Dec 23 2018 00:00:00 GMT+0300"
            ]
          },
          {
            "id": 2,
            "name": "Тренировка",
            "description": "Тренажерный зал “Пушкин” в 12:00",
            "plannedIn": [
              "Mon Dec 17 2018 00:00:00 GMT+0300",
              "Sun Dec 23 2018 00:00:00 GMT+0300"
            ],
            "resolvedIn": [
              "Mon Dec 17 2018 00:00:00 GMT+0300",
              "Sun Dec 23 2018 00:00:00 GMT+0300"
            ]
          },
        ]
      },
      {
        "from": "Mon Dec 24 2018 00:00:00 GMT+0300",
        "to": "Sun Dec 30 2018 00:00:00 GMT+0300",
        "habits": [
          {
            "id": 1,
            "name": "Ранний подъем",
            "description": "Подъем до 7 утра",
            "plannedIn": [
              "Mon Dec 24 2018 00:00:00 GMT+0300",
              "Sun Dec 30 2018 00:00:00 GMT+0300"
            ],
            "resolvedIn": [
              "Mon Dec 24 2018 00:00:00 GMT+0300",
              "Sun Dec 30 2018 00:00:00 GMT+0300"
            ]
          },
          {
            "id": 2,
            "name": "Тренировка",
            "description": "Тренажерный зал “Пушкин” в 12:00",
            "plannedIn": [
              "Mon Dec 24 2018 00:00:00 GMT+0300",
              "Sun Dec 30 2018 00:00:00 GMT+0300"
            ],
            "resolvedIn": [
              "Mon Dec 24 2018 00:00:00 GMT+0300",
              "Sun Dec 30 2018 00:00:00 GMT+0300"
            ]
          },
        ]
      },
      {
        "from": "Mon Dec 31 2018 00:00:00 GMT+0300",
        "to": "Sun Jan 6 2019 00:00:00 GMT+0300",
        "habits": [
          {
            "id": 1,
            "name": "Ранний подъем",
            "description": "Подъем до 7 утра",
            "plannedIn": [
              "Mon Dec 31 2018 00:00:00 GMT+0300",
              "Sun Jan 6 2018 00:00:00 GMT+0300"
            ],
            "resolvedIn": [
              "Mon Dec 31 2018 00:00:00 GMT+0300",
              "Sun Jan 6 2018 00:00:00 GMT+0300"
            ]
          },
          {
            "id": 2,
            "name": "Тренировка",
            "description": "Тренажерный зал “Пушкин” в 12:00",
            "plannedIn": [
              "Mon Dec 31 2018 00:00:00 GMT+0300",
              "Sun Jan 6 2018 00:00:00 GMT+0300"
            ],
            "resolvedIn": [
              "Mon Dec 31 2018 00:00:00 GMT+0300",
              "Sun Jan 6 2018 00:00:00 GMT+0300"
            ]
          },
        ]
      }
    ]
  }
];

router.get('/:month', (req, res, next) => {
  const { month } = req.params;

  if (!month) {
    res.sendStatus(400);
    return next();
  }

  if (month <= 0 || month > 12) {
    res.send({ error: "Wrong month number" });
    return next();
  }

  habits[0].month = month;

  res.send(habits[0]);
  return next();
});

module.exports = {
  router
};
