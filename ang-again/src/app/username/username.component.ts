import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName = 'userName';
  userNameCreationStatus = 'You do not have a user name yet. Please enter one.';
  constructor() { }

  ngOnInit(): void {
  }

  onCreateUserName() {
    this.userNameCreationStatus = 'Server was created! Name is ' + this.userName;
  }

}
