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
  }
  update() {
    this.user = this.userService.findUserById(this.userId);
    if (this.pageEditForm.value.name.length > 0) {
      this.page['name'] = this.pageEditForm.value.name;
    }
    if (this.pageEditForm.value.description.length > 0) {
      this.user['description'] = this.pageEditForm.value.description ;
    }
    this.pageService.updatePage( this.pageid, this.page);
    this.router.navigate(['user/' + this.userId, 'website', this.webid, 'page']);
  }

  delete() {
    this.pageService.deleteWebsite(this.pageid);
    this.router.navigate(['user/' + this.userId, 'website', this.webid, 'page']);
  }
}
