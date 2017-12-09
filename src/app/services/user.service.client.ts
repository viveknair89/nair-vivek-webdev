import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {map} from 'rxjs/operator/map';
import {SharedService} from './shared.service.client';

// injecting service into module
@Injectable()

export class UserService {
  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
    'findUserByCredentials' : this.findUserByCredentials
  };

  baseUrl = environment.baseUrl;

  constructor(private _http: Http, private sharedService: SharedService,
              private  router: Router) { }

  options: RequestOptions = new RequestOptions();

  loggedIn() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  login(username: String, password: String) {
    this.options.withCredentials = true; // jga

    const body = {
      username : username,
      password : password
    };
    return this._http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }


  register(user: any) {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/user', user, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        });
  }


  createUser(user: any) {
    return this._http.post(this.baseUrl + '/api/user/', user)
      .map(
        (res: Response) => {
          return res.json();
        });
  }

  findUserById(userId: String) {
    return this._http.get(this.baseUrl + '/api/user/' + userId)
      .map(
      (res: Response) => {
        return res.json();
      });
  }

  findUserByCredentials(username: String, password: String) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map(
        (res: Response) => {
          return res.json();
        });
  }

  findUserByUsername(username: String) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username)
      .map(
        (res: Response) => {
          return res.json();
        });
  }
  updateUser(userId , user) {
    // return this._http.put(this.baseUrl + '/api/user/' + userId, user)
    return this._http.put(this.baseUrl + '/api/user/' + userId, user)
      .map(
        (res: Response) => {
          return res.json();
        });
  }

  deleteUser(userId: String) {
    return this._http.delete(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          return res.json();
        });
  }
}

