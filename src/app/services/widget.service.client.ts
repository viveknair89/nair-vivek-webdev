import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor() { }

  widgets = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/vbOO9Wq6rCA' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}

  ];

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  createWidget(pageId: String, widget: any) {
    widget._id = Math.random() * 10000;
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId: String) {
    // const resultset= [{}];
    const resultset=[];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        resultset.push(this.widgets[x]);
      }
    }
    return resultset;
  }

  findWidgetById(widgetId: String) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId: String, widget: any) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {  this.widgets[x] = widget; }
    }
  }

  deleteWidget(widgetId: String) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {this.widgets.splice(x, 1); }
    }
  }
}
