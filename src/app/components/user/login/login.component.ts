import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // Properties
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(username: String, password: String) {
    // fetching data from loginform
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.errorFlag = this.loginForm.value.errorFlag;
    const user = this.userService.findUserByCredentials(this.username, this.password);
    if (user) {
      this.router.navigate(['/user/' + user._id]);
    } else { this.errorFlag = true; }
  }

  register() { this.router.navigate(['/register']);
  }
}
