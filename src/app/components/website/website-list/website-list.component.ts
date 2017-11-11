import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  websites = [{}];
  user: any;
  username: String;

  constructor(private _websiteService: WebsiteService, private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
        this.userId = params['userId'];
      }
    );

    this.userService.findUserById(this.userId)
      .subscribe(
        (user: any) => {
          this.username = user.username;
        });


    this._websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (websites: any) => {
          this.websites = websites;
        }
      );
  }
}
