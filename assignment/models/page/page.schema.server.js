var mongoose = require('mongoose');
var pageSchema =mongoose.Schema({
  websiteId: {type: mongoose.Schema.Types.ObjectId, ref:'WebsiteModel'},
  name: String,
  description: String,
  title: String,
  widgets: [{type: mongoose.Schema.Types.ObjectId, ref: 'WidgetModel'}],
  creationDate: {type: Date, default: Date.now()}
},{collection: 'page' });
module.exports = pageSchema;
