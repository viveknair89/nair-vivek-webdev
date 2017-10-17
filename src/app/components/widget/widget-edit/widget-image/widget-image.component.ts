import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  widget = {};
  url: string;
  width: string;
  userId: string;
  webid: string;
  pageid: string;
  wgid: string;

  constructor(private widgetService: WidgetService, private activatedRoutes: ActivatedRoute) {  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.webid = params['webid'];
      this.pageid = params['pageid'];
      this.wgid = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.wgid);
      this.width = this.widget['width'];
      this.url = this.widget['url'];
    });
  }

  update() {
    this.widget['widgetType'] = 'IMAGE';
    this.widget['url'] = this.url;
    this.widget['width'] = this.width;
    this.widgetService.updateWidget(this.wgid, this.widget);
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid);
  }

}
