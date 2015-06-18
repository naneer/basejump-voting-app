'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    timestamps = require('mongoose-timestamps');
    
var choiceSchema = new Schema({
  label: String,
  value: Number,
  color: String,
  highlight: String
});

var PollSchema = new Schema({
  question: String,
  user_id: String,
  allow_other: Boolean,
  chart_type: String,
  choices: [choiceSchema]
});

PollSchema.plugin(timestamps);

module.exports = mongoose.model('Poll', PollSchema);