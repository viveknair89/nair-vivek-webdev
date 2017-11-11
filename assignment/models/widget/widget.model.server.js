var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var WidgetModel = mongoose.model('WidgetModel', widgetSchema);
var db = require('../models.server');

WidgetModel.findWidgetById = findWidgetById;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.createWidget = createWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.updateWidget = updateWidget;
WidgetModel.reorderWidget = reorderWidget;

module.exports = WidgetModel;

function createWidget(pageId, widget){
  widget._page = pageId;
  return WidgetModel.create(widget);
}

function findAllWidgetsForPage(pageId){
  return WidgetModel.find({_page: pageId});
}

function findWidgetById(widgetId){
  return WidgetModel.findOne({_id: widgetId});
}

function updateWidget(widgetId, widget){
  return WidgetModel.update({_id: widgetId}, widget);
}

function deleteWidget(widgetId){
  return WidgetModel.remove({_id: widgetId});
}

function reorderWidget(pageId, start, end){
  return WidgetModel.update({_page: pageId, position: start}, {position: end});
}
