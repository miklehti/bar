'use strict';

var mongoose = require('mongoose'),
    eSchema = mongoose.Schema;

var EventSchema = new eSchema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Event', EventSchema);