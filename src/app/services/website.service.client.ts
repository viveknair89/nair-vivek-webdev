import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() { }

  websites = [
    { _id: '123', name: 'Facebook',    developerId: '456', description: 'Lorem' },
    { _id: '234', name: 'Tweeter',     developerId: '456', description: 'Lorem' },
    { _id: '456', name: 'Gizmodo',     developerId: '456', description: 'Lorem' },
    { _id: '890', name: 'Go',          developerId: '123', description: 'Lorem' },
    { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
    { _id: '678', name: 'Checkers',    developerId: '123', description: 'Lorem' },
    { _id: '789', name: 'Chess',       developerId: '234', description: 'Lorem' }
  ];

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(userId: String, website: any) {
    website._id = Math.random() * 10000;
    website.developerId = userId;
    this.websites.push(website);
    return website;
  }

  findWebsitesByUser(userId: String) {
    const resultset = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        resultset.push(this.websites[x]);
      }
    }
    return resultset;
  }

  findWebsiteById(websiteId: String) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites[x];
      }
    }
  }

  updateWebsite(websiteId: String, website: any) {
      for (let x = 0; x < this.websites.length; x++) {
        if (this.websites[x]._id === websiteId) {  this.websites[x] = website; }
      }
    }

  deleteWebsite(websiteId: String) {
      for (let x = 0; x < this.websites.length; x++) {
        if (this.websites[x]._id === websiteId) {this.websites.splice( x, 1 ); }
      }
  }
}
