import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  baseUrl = environment.baseUrl;


  text: String;
  rows: String;
  placeholder: String;
  userId: String;
  webId: String;
  pageId: String;
  wgid: String;
  formatted: String;
  name: String;
  widgets = [{}];
  widget = {};

  constructor(private widgetService: WidgetService, private activatedRoutes: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.webId = params['webid'];
      this.pageId = params['pageid'];
      this.wgid = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.wgid)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.rows = widget['rows'];
            this.text = widget['text'];
            this.formatted = widget['formatted'];
            this.name = widget['name'];
            this.placeholder = widget['placeholder'];
          });
    });
  }

  update() {
    this.widget['widgetType'] = 'TEXT';
    this.widget['rows'] = this.rows;
    this.widget['name'] = this.name;
    this.widget['text'] = this.text;
    this.widget['formatted'] = this.formatted;
    this.widget['placeholder'] = this.placeholder;
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe(
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
