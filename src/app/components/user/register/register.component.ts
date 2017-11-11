import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  // Properties
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;
  verify_password: String;
  errorMsg: String;
  errorFlag: boolean;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;
    this.email = this.registerForm.value.email;
    this.verify_password = this.registerForm.value.verify_password;
    this.errorFlag = this.registerForm.value.errorFlag;

    const user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };

    this.userService.createUser(user)
      .subscribe((newuser: any) => {
          this.router.navigate(['user/' + newuser._id]);
          this.errorFlag = false;
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }
  cancel()  { this.router.navigate(['/login']);
  }
}
