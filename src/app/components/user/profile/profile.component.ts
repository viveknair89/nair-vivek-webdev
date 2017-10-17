import { Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  // properties
  @ViewChild('f') profileForm: NgForm;
  userId: String;
  user = {};
  userName: String;
  errorFlag: boolean;
  errorMsg: String;
  firstName: String;
  lastName: String;
  email: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
          this.userId = params['userId'];
        }
    );
    this.user = this.userService.findUserById(this.userId);
    this.userName = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
  }
  update() {
    if (this.profileForm.value.username.length > 0) {
      this.user['username'] = this.profileForm.value.username;
    }
    if (this.profileForm.value.email.length > 0) {
      this.user['email'] = this.profileForm.value.email;
    }
    if (this.profileForm.value.firstName.length > 0) {
      this.user['firstName'] = this.profileForm.value.firstName;
    }
    if (this.profileForm.value.lastName.length > 0) {
      this.user['lastName'] = this.profileForm.value.lastName;
    }
    if (this.profileForm.value.email.length > 0) {
      this.user['email'] = this.profileForm.value.email;
    }
    this.userService.updateUser( this.user['userId'], this.user);
    this.router.navigate(['user/' + this.userId]);
  }
}
