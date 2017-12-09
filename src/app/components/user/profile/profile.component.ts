import { Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import { SharedService} from '../../../services/shared.service.client';

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
  password: String;
  lastName: String;
  email: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    alert("in profile")
    // this.activatedRoute.params.subscribe((params: any) => {
    //     this.userId = params['userId'];
    //   }
    // );
    // this.userService.findUserById(this.userId)
    //   .subscribe((user: any) => {
    //       this.user = user;
    //       this.userName = this.user['username'];
    //       this.firstName = this.user['firstName'];
    //       this.lastName = this.user['lastName'];
    //       this.email = this.user['email'];
    //     },
    //     (error: any) => {
    //       this.errorFlag = true;
    //     }
    //   );
    this.user =  this.sharedService.user;
    this.userId = this.user['_id'];
    this.userName = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.password = this.user['password'];
    this.email = this.user['email'];
  }
  update() {
    // if (this.profileForm.value.username.length > 0) {
    this.user['username'] = this.profileForm.value.username;
    // }
    // if (this.profileForm.value.email.length > 0) {
    this.user['email'] = this.profileForm.value.email;
    // }
    // if (this.profileForm.value.firstName.length > 0) {
    this.user['firstName'] = this.profileForm.value.firstName;
    // }
    // if (this.profileForm.value.lastName.length > 0) {
    this.user['lastName'] = this.profileForm.value.lastName;
    // }
    // if (this.profileForm.value.email.length > 0) {
    this.user['email'] = this.profileForm.value.email;
    // }
    console.log(this.userId);
    this.userService.updateUser( this.userId, this.user)
      .subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.userName = this.user['username'];
          this.firstName = this.user['firstName'];
          this.lastName = this.user['lastName'];
          this.email = this.user['email'];
        });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

}
