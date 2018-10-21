const { ObjectId } = require('mongodb');

module.exports = {
  async up(db) {
    await db.createCollection('users');
    await db.collection('users').insertMany([{
      _id: new ObjectId('5bcbcd75d2b08d55480198f8'),
      username: 'John',
      password: '$2a$10$uJYj/G1HlBIn7Ia3yCSIuuMr2L/D0fsocPbnJ8tKN7CgAgXM32Zo2', // 123
      email: 'Doe@email.com'
    }, {
      _id: new ObjectId('5bcbcda98acd0063d863f8fd'),
      username: 'Ivan',
      password: '$2a$10$tCiFjQXALcchf/VK5N348OWh7h7xEekW7k2X1vXlxdyqi1J1Y4dje', // 123
      email: 'Ivanov@email.com'
    }, {
      _id: new ObjectId('5bcbce111c03425714570f6a'),
      username: 'Vasya',
      password: '$2a$10$Ybzjn.okELV19qgJxXBEaOqlCAM1Sao/o8WhfGzmGMhtNWtPV9e1a', // 123
      email: 'Pupkin@email.com'
    }, {
      _id: new ObjectId('5bcbcced9230594850193655'),
      username: 'test',
      password: '$2a$10$ANaWjo3OJQZohETM/9xKF.TSOb5maKowH.lhxzDQRCcwnc2R9yo8q', // test
      email: 'test@email.com'
    }, ])
  },

  async down(db) {
    try {
      await db.dropCollection('users')
    } catch (err) {
      throw err
    }
  },
}
