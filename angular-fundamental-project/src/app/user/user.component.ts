import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  error_message: string = "";
  flag: boolean = false;

  userObj: any = {
    username: "",
    password: ""
  }

  login() {
    if(this.userObj.username == "admin" && this.userObj.password == "admin") {
      this.flag = false;
      alert('You are loggedIn successfully.');
    } else {
      this.flag = true;
      this.error_message = "Invalid Credentials. You can try again.";
    }
  }

}
