import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  userId: String;
  webId: String;
  pageId: String;
  widget: any;
  constructor(private activatedRoutes: ActivatedRoute, private userService: UserService,
              private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.webId = params['webid'];
      this.pageId = params['pageid'];
      this.userId = params['userId'];
    });
  }
  create(type) {
    const tempwidget = { widgetType: type };
    this.widget = this.widgetService.createWidget(this.pageId, tempwidget)
      .subscribe(
        (newwidget: any) => {
          this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget',
            newwidget['_id']]);
        }
      );
  }

}
