import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class UserService {

  constructor() { }

  users = [
    {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder',
      email: 'alice@wonderland.com' },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley',
      email: 'bob@marley.com' },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia',
      email: 'charly@garcia.com' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi',
      email: 'jannunzi@annunzi.com' }
  ];

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
    'findUserByCredentials' : this.findUserByCredentials
  };

  createUser(user: any) {
    user._id = Math.random();
    this.users.push(user);
    return user;
  }

  findUserById(userId: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  return this.users[x]; }
    }
  }

  findUserByUsername(username: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) { return this.users[x]; }
    }
  }

  findUserByCredentials(username, password) {
    for (let x = 0; x < this.users.length; x++) {
      if ( this.users[x].username === username && this.users[x].password === password) {
        return this.users[x]; }
    }
  }
  updateUser(userId: String, user: any) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  this.users[x] = user; return this.users[x];
      }
    }
  }
  deleteUser(userId: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  delete this.users[x]; }
    }
  }
}

