import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = "";
  password : string = "";
  name : string = "";



  constructor() { 
  
  }

  ngOnInit(): void {
  }

  register() {
    console.log(
      this.name + " " +
      this.email + " " + 
      this.password + " "
      );
  }


}
