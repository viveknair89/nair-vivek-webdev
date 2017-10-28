import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private _http: Http) {}
  baseUrl = environment.baseUrl;

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  createWidget(pageId: String, widget: any) {
    widget._id = Math.floor(Math.random() * 100).toString();
    widget.pageId = pageId;
    return this._http.post(environment.baseUrl + '/api/page/' + pageId + '/widget', widget)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWidgetsByPageId(pageId: String) {
    return this._http.get(environment.baseUrl + '/api/page/' + pageId + '/widget')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWidgetById(widgetId: String) {
    return this._http.get(environment.baseUrl + '/api/widget/' + widgetId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateWidget(widgetId: String, widget: any) {
    return this._http.put(environment.baseUrl + '/api/widget/' + widgetId, widget)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteWidget(widgetId: String) {
    return this._http.delete(environment.baseUrl + '/api/widget/' + widgetId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
