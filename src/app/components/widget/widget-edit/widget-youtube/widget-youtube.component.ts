import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  widget = {};
  url: String;
  width: String;
  widgets = [{}];
  userId: String;
  webid: String;
  pageid: String;
  wgid: String;

  constructor(private widgetService: WidgetService, private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.webid = params['webid'];
      this.pageid = params['pageid'];
      this.wgid = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.wgid)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.width = this.widget['width'];
            this.url = this.widget['url'];
          }
        );
    });
  }

  update() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['url'] = this.url;
    this.widget['width'] = this.width;
    this.widgetService.updateWidget(this.wgid, this.widget).subscribe(
      (widgets: any) => {
        this.widgets = widgets;
      }
    );
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      (widgets: any) => {
        this.widgets = widgets;
      }
    );
  }

}

