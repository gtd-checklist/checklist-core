const ObjectId = require('mongodb').ObjectId;

// TO DO

module.exports = {
  async up(db) {
    await db.createCollection('users');
    await db.collection('users').insertMany([{
      _id: new ObjectId('5bb0ac63be662302c80f8412'),
      username: 'John',
      password: '123',
      email: 'Doe@email.com'
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8413'),
      username: 'Ivan',
      password: '123',
      email: 'Ivanov@email.com'
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8414'),
      username: 'Vasya',
      password: '123',
      email: 'Pupkin@email.com'
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8415'),
      username: 'test',
      password: 'test',
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
