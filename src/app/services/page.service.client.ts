import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(websiteId: String, page: any) {
    page._id = Math.floor(Math.random() * 100).toString();
    page.websiteId = websiteId;
    return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findPageByWebsiteId(websiteId: String) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
    // const resultset = [];
    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x].websiteId === websiteId) {
    //     // let ws: any;
    //     // ws = this.pages[x];
    //     resultset.push(this.pages[x]);
    //   }
    // }
    // return resultset;

  findPageById(pageId: String) {
    return this._http.get(this.baseUrl + '/api/page' + pageId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updatePage(pageId: String, page: any) {
    return this._http.put(this.baseUrl + '/api/page/' + pageId , page)
    .map(
      (res: Response) => {
        const data = res.json();
        return data;
      }
    );
  }

  deletePage(pageId: String) {
    return this._http.delete(this.baseUrl + '/api/page' + pageId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
