import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;
  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(userId: String, website: any) {
    website._id = Math.floor(Math.random() * 100).toString();
    website.developerId = userId;
    return this._http.post(environment.baseUrl + '/api/user/' + userId + '/website', website)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWebsitesByUser(userId: String) {
    return this._http.get(environment.baseUrl + '/api/user/' + userId + '/website')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWebsiteById(websiteId: String) {
    return this._http.get(environment.baseUrl + '/api/website/' + websiteId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateWebsite(websiteId: String, website: any) {
    return this._http.put(environment.baseUrl + '/api/website/' + websiteId, website)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
    }

  deleteWebsite(websiteId: String) {
    return this._http.delete(environment.baseUrl + '/api/website/' + websiteId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
