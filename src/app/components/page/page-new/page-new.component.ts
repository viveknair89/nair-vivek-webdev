import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageNewForm: NgForm;
  userId: String;
  user: any;
  page: any;
  pages = [{}];
  name: String;
  description: String;
  webId: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private pageService: PageService, private router: Router) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
        this.webId = params['webid'];
        this.userId = params['userId'];
      }
    );
    this.user = this.userService.findUserById(this.userId);
    this.pages = this.pageService.findPageByWebsiteId(this.webId);
  }

  create() {
    this.user = this.userService.findUserById(this.userId);
      this.name = this.pageNewForm.value.name;
      this.description = this.pageNewForm.value.description;
      alert(this.name);
     const temp = {name: this.name, description: this.description};
    this.page = this.pageService.createPage(this.webId, temp);
    // this.router.navigate(['user/' + this.userId, 'website', this.webId, 'page']);
  }

}
