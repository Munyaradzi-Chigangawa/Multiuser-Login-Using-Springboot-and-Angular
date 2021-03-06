import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = "";
  password : string = "";
  name : string = "";

  user : User = new User();

  constructor( private authService : AuthService ) { 
  
  }

  ngOnInit(): void {
  }

  register() {
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.name = this.name;
    this.user.role = "user";

    this.authService.register(this.user).subscribe(res => {
      if (res == null) {
        alert("Registration failed");
        this.ngOnInit();
      } else {
        console.log("Registration success")
        alert("Registration success");
        this.ngOnInit();
      }

    }, err => {
      alert("Registration Failed.");
      this.ngOnInit();
    }
    )
  }


}
