import mongoose from 'mongoose';

const { Schema } = mongoose;

const ActivitySchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  frequency: [{     // ?? Right now I plan to have an array of days of the week
    type: Number,
  }],
  successCriteria: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
});

export default mongoose.model('Activity', ActivitySchema);
