import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';


@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  basUrl = environment.baseUrl;

  text: String;
  userId: String;
  webId: String;
  pageId: String;
  wgid: String;
  widget = {};
  widgets = [{}];
  constructor(private widgetService: WidgetService, private activatedRoutes: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.webId = params['webid'];
      this.pageId = params['pageid'];
      this.wgid = params['wgid'];
      this.widgetService.findWidgetById(this.wgid)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.text = widget['text'];
          }
        );
    });
  }
  update() {
    this.widget['widgetType'] = 'HTML';
    this.widget['text'] = this.text;
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe(
        (widgets: any) => {
          this.router.navigate(['user/' + this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
        }
      );
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid).subscribe(
      (widgets: any) => {
        this.widgets = widgets;
      });
  }
}
