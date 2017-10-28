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
    this.websiteService.findWebsiteById(this.webid).subscribe( (website: any) => {
      this.name = website.name;
      this.description = website.description;
      }
    );
    this.websiteService.findWebsitesByUser(this.userId).subscribe( (websites: any) => {
        this.websites = websites;
      }
    );

  }
    // this.user = this.userService.findUserById(this.userId);
    // this.websites = this.websiteService.findWebsitesByUser(this.userId);
    //   this.website = this.websiteService.findWebsiteById(this.webid);
    // this.name = this.website.name;
    // this.description = this.website.description;

  update() {
    // this.user = this.userService.findUserById(this.userId);
    const edited = { '_id': this.webid,
      'name': this.websiteEditForm.value.name,
      'developerId': this.userId,
      'description': this.websiteEditForm.value.description };
    // if (this.websiteEditForm.value.name.length > 0) {
    //   this.website['name'] = this.websiteEditForm.value.name;
    // }
    // if (this.websiteEditForm.value.description.length > 0) {
    //   this.website['description'] = this.websiteEditForm.value.description;
    // }
    this.websiteService.updateWebsite(this.webid, edited)
      .subscribe(
        (sites: any) => {
          this.websites = sites;
          this.router.navigate(['user/' + this.userId, 'website']);
        }
      );
    // const tempWebsite = {name: this.user['name'], description: this.user['description']};
    // this.websiteService.updateWebsite( this.webid, tempWebsite);
    // this.router.navigate(['user/' + this.userId, 'website']);
  }

  delete() {
    this.websiteService.deleteWebsite(this.webid)
      .subscribe(
        (website: any) => {
      this.router.navigate(['user/' + this.userId, 'website']);
        }
      );
  }
}
