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
  constructor(private activatedRoute: ActivatedRoute,
              private pageService: PageService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
        this.webid = params['webid'];
        this.pageid = params['pageid'];
        this.userId = params['userId'];
      }
    );

    this.pageService.findPageById(this.pageid)
      .subscribe((page: any) => {
        this.name = page.name;
        this.description = page.description;
      }
    );
    this.pageService.findPageByWebsiteId(this.webid).subscribe((pages: any) => {
        this.pages = pages;
      }
    );
  }
  update() {
    const tempPage = {'_id': this.pageid, name: this.pageEditForm.value.name,
      description: this.pageEditForm.value.description, 'websiteId': this.webid };
    this.pageService.updatePage( this.pageid, tempPage)
      .subscribe(
        (page: any) => {
          this.router.navigate(['user/' + this.userId, 'website', this.webid, 'page']);
        }
      );
  }

  delete() {
    this.pageService.deletePage(this.pageid)
      .subscribe(
        (page: any) => {
          this.router.navigate(['user/' + this.userId, 'website', this.webid, 'page']);
        }
      );
  }
}
