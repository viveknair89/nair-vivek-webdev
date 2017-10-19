import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') pageEditForm: NgForm;
  userId: String;
  user: any;
  page: any;
  pages = [{}];
  name: String;
  description: String;
  pageid: String;
  webid: String;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private pageService: PageService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
        this.webid = params['webid'];
        this.pageid = params['pageid'];
        this.userId = params['userId'];
      }
    );
    this.pages = this.pageService.findPageByWebsiteId(this.webid);
    this.page = this.pageService.findPageById(this.pageid);
    this.name = this.page.name;
    this.description = this.page.description;
  }
  update() {
    this.user = this.userService.findUserById(this.userId);
    if (this.pageEditForm.value.name.length > 0) {
      this.page['name'] = this.pageEditForm.value.name;
    }
    if (this.pageEditForm.value.description.length > 0) {
      this.user['description'] = this.pageEditForm.value.description ;
    }
    const tempPage = {name: this.page['name'], description: this.page['description'] };
    this.pageService.updatePage( this.pageid, tempPage);
    // this.router.navigate(['user/' + this.userId, 'website', this.webid, 'page']);
  }

  delete() {
    this.pageService.deletePage(this.pageid);
    this.router.navigate(['user/' + this.userId, 'website', this.webid, 'page']);
  }
}
