import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {map} from 'rxjs/operator/map';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private _http: Http) { }

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
    'findUserByCredentials' : this.findUserByCredentials
  };
  baseUrl = environment.baseUrl;

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

