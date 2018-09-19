import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  users: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    }]
  },
  wager: {
    type: Number,
    required: true,
    min: 1
  }
});

module.exports = mongoose.model('groups', GroupSchema);
