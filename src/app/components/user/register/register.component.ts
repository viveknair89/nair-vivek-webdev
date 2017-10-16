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
  verify_password: String;
  errorMsg: String;
  errorFlag: boolean;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }
  register(username: String, password: String, verify_password: String) {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verify_password = this.registerForm.value.verify_password;
    this.errorFlag = this.registerForm.value.errorFlag;
    if (this.password === this.verify_password) {
      const user = this.userService.findUserByUsername(this.username);
      if ( user ) { this.errorFlag = true; }
      const newuser = this.userService.createUser(this);
      if (newuser) {
        this.router.navigate(['/user/' + user._id]);
      } else { this.errorFlag = true;
      this.errorMsg = 'Cannot register User'; }
    } else { this.errorFlag = true;
    this.errorMsg = 'Passwords Do Not Match'; }
  }
  cancel() { this.router.navigate(['/login']);
  }

}
