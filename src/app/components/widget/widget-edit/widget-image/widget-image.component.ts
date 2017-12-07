import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  widget = {};
  url: String;
  width: String;
  imageName: String;
  imageText: String;
  upload: String;
  userId: String;
  webid: String;
  widgets = [{}];
  pageid: String;
  wgid: String;
  baseUrl = environment.baseUrl;


  constructor(private widgetService: WidgetService, private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    // alert('in init');
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.webid = params['webid'];
      this.pageid = params['pageid'];
      this.wgid = params['wgid'];
      this.widgetService.findWidgetById(this.wgid)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.width = this.widget['width'];
            this.url = this.widget['url'];
            this.imageName = this.widget['imageName'];
            this.imageText = this.widget['imageText'];
            this.upload = this.widget['upload'];
            // alert(this.imageName);
          }
        );
    });
  }

  update() {
    this.widget['widgetType'] = 'IMAGE';
    this.widget['url'] = this.url;
    this.widget['width'] = this.width;
    this.widget['upload'] = this.upload;
    this.widget['imageName'] = this.imageName;
    this.widget['imageText'] = this.imageText;
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
