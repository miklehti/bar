'use strict';

var mongoose = require('mongoose'),
    eSchema = mongoose.Schema;

var EventSchema = new eSchema({
  emaili: String,
  status: String,
  audience: String,
  URLi: String,
  testName: String,
  hypothesis: String,
  KPIs: String,
  descriptioni: String,
   imgA: { data: Buffer, contentType: String },
   imgB: { data: Buffer, contentType: String },
  site:String,
  active: Boolean
});

module.exports = mongoose.model('Event', EventSchema);