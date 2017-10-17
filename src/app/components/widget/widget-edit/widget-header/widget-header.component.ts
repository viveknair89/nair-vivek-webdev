import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  txt: String;
  userId: String;
  webid: String;
  pageid: String;
  wgid: String;
  size: String;
  widget = {};

  constructor(private widgetService: WidgetService, private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.webid = params['webid'];
      this.pageid = params['pageid'];
      this.wgid = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.wgid);
      this.txt = this.widget['text'];
      this.size = this.widget['size'];
    });
  }

  update() {
    this.widget['widgetType'] = 'HEADING';
    this.widget['text'] = this.txt;
    this.widget['size'] = this.size;
    this.widgetService.updateWidget(this.wgid, this.widget);
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid);
  }

}
