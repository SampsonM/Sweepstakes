'use strict'
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: false,
    default: ''
  }],
  verifiedUsers: {
    type: Array,
    required: false,
    unique: false
  },
  wager: {
    type: Number,
    required: true,
    min: 1
  }
})

module.exports = mongoose.model('groups', GroupSchema)
