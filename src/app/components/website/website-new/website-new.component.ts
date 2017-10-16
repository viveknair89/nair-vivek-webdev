import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') websiteNewForm: NgForm;
  userId: String;
  user: any;
  website: any;
  websites = [{}];
  name: String;
  description: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private websiteService: WebsiteService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
        this.userId = params['userId'];
      }
    );
    this.user = this.userService.findUserById(this.userId);
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

  create() {
    this.user = this.userService.findUserById(this.userId);
    if (this.websiteNewForm.value.name.length > 0) {
      this.user['name'] = this.websiteNewForm.value.name;
    }
    if (this.websiteNewForm.value.desciption.length > 0) {
      this.user['description'] = this.websiteNewForm.value.description ;
    }
    const temp = {name: this.name, description: this.description};
    this.website = this.websiteService.createWebsite(this.userId, temp);
    this.router.navigate(['user/' + this.userId, 'website']);
  }

}
