const { ObjectId } = require('mongodb');

module.exports = {
  async up(db) {
    await db.createCollection('activities');
    await db.collection('activities').insertMany([{
      userId: new ObjectId('5bcbcced9230594850193655'),
      title: 'Do a good thing!',
      successCriteria: 'Did it again!',
      status: 'completed',
      frequency: [1,2,3,4,5,6,7],
    }, {
      userId: new ObjectId('5bcbcced9230594850193655'),
      title: 'Another awesome activity',
      successCriteria: 'Did it again!',
      status: 'pending',
      frequency: [1,3,4,5,7],
    }, {
      userId: new ObjectId('5bcbcced9230594850193655'),
      title: 'Best activity ever!',
      successCriteria: 'Do it as never before',
      status: 'failed',
      frequency: [1,7],
    }, ])
  },

  async down(db) {
    try {
      await db.dropCollection('activities')
    } catch (err) {
      throw err
    }
  },
}
