import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: String;
  pages = [{}];
  webId: String;
  user: any;

  constructor(private pageService: PageService, private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
        this.userId = params['userId'];
        this.webId = params['webid'];
      }
    );

    this.pages = this.pageService.findPageByWebsiteId(this.webId);
    this.user = this.userService.findUserById(this.userId);
  }
}
