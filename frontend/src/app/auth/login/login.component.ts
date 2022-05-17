import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = "";
  password : string = "";
  role : string = "";

  user : User = new User();

  roles : string[];

  constructor( private authService : AuthService) { 
    this.roles = [
      'admin', 
      'user'
    ];
  }

  ngOnInit(): void {

  }
    login() {
      
      this.user.email = this.email;
      this.user.password = this.password;
      this.user.role = this.role;
    }
}
