import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {WidgetService} from '../../../services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: String;
  widgets: any;
  webid: String;
  pageid: String;
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
              private widgetService: WidgetService, public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
        this.webid = params['webid'];
        this.userId = params['userId'];
        this.pageid = params['pageid'];
      }
    );
    this.widgetService.findWidgetsByPageId(this.pageid)
      .subscribe(
        (wdgts: any) => {
          this.widgets = wdgts;
        }
      );
    this.user = this.userService.findUserById(this.userId);

  }
}
