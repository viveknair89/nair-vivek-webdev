import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  userId: string;
  webId: string;
  pageId: string;
  widgetId: string;
  widget: {};
  widtype: string;

  constructor(private widgetService: WidgetService, private activatedRoutes: ActivatedRoute) {  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.webId = params['webid'];
      this.pageId = params['pageid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.widtype = widget['widgetType'];
          }
        );
    });
  }
}
