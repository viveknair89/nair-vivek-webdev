var mongoose = require('mongoose');
var widgetSchema =mongoose.Schema({
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  creationDate: {type: Date, default: Date.now()},
  _page: {type:mongoose.Schema.Types.ObjectId, ref: 'PageModel'},
  widgetType: {type: String,enum:['HEADING','IMAGE','YOUTUBE','HTML','TEXT']}
},{collection: 'widget' });
module.exports = widgetSchema;
