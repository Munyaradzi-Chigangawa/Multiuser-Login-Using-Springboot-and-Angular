import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = "";
  password : string = "";
  role : string = "";

  roles : string[];

  constructor() { 
    this.roles = [
      'admin', 
      'user'
    ];
  }

  ngOnInit(): void {
  }

  register() {
    console.log(
      this.email + " " + 
      this.password + " " + 
      this.role
      );
  }


}
