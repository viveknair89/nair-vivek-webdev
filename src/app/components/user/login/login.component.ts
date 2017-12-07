import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

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

  constructor(private userService: UserService, private sharedService: SharedService,
              private router: Router) {
  }

  ngOnInit() {
  }

  // login() {
  //   // fetching data from loginform
  //   this.username = this.loginForm.value.username;
  //   this.password = this.loginForm.value.password;
  //   this.errorFlag = this.loginForm.value.errorFlag;
  //   this.userService.findUserByCredentials(this.username, this.password)
  //     .subscribe((user: any) => {
  //       if (user) {
  //         this.router.navigate(['/user/' + user._id]);
  //       } else {
  //         this.errorFlag = true;
  //       }
  //     });
  // }

  login() {

    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    // calling client side userservice to send login information
    console.log('data', this.username);
    this.userService.login(this.username, this.password)
      .subscribe(
        (user: any) => {
          if (user) {
            this.sharedService.user = user;
            this.router.navigate(['/user']);
          } else {
            this.errorFlag = true;
          }

        });
  }


  register() { this.router.navigate(['/register']);
  }
}
