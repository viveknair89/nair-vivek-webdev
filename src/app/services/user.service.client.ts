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

  // users = [
  //   {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder',
  //     email: 'alice@wonderland.com' },
  //   {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley',
  //     email: 'bob@marley.com' },
  //   {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia',
  //     email: 'charly@garcia.com' },
  //   {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi',
  //     email: 'jannunzi@annunzi.com' }
  // ];

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
    user._id = Math.floor(Math.random() * 100).toString();
    return this._http.post(environment.baseUrl + '/api/user/', user)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserById(userId: String) {
    return this._http.get(environment.baseUrl + '/api/user/' + userId)
      .map(
      (res: Response) => {
        const data = res.json();
        return data;
      }
    );
  }

  findUserByCredentials(username: String, password: String) {
    return this._http.get(environment.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByUsername(username: String) {
    return this._http.get(environment.baseUrl + '/api/user?username=' + username)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }


  updateUser(userId, user) {
    return this._http.put(environment.baseUrl + '/api/user/' + userId, user)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteUser(userId: String) {
    return this._http.delete(environment.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}

