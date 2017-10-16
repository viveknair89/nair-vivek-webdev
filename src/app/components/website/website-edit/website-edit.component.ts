import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') websiteEditForm: NgForm;
  userId: String;
  user: any;
  website: any;
  websites = [{}];
  name: String;
  description: String;
  errorMsg: String;
  webid: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private websiteService: WebsiteService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.webid = params['webid'];
      this.userId = params['userId'];
      }
    );
  }
  update() {
    this.user = this.userService.findUserById(this.userId);
    if (this.websiteEditForm.value.name.length > 0) {
      this.user['name'] = this.websiteEditForm.value.name;
    }
    if (this.websiteEditForm.value.description.length > 0) {
      this.user['description'] = this.websiteEditForm.value.description ;
    }
    this.websiteService.updateWebsite( this.webid, this.website);
    this.router.navigate(['user/' + this.userId, 'website']);
  }

  delete() {
    this.websiteService.deleteWebsite(this.webid);
    this.router.navigate(['user/' + this.userId, 'website']);
  }
}
