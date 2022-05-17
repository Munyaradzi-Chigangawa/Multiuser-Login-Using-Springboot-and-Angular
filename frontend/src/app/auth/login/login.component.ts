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
  route: any;

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

    this.authService.login(this.user).subscribe(res => {
      if (res == null) {
        alert("Login failed! Invalid User credentials");
        this.ngOnInit();
      } else {
        console.log("Login success")
        alert("Login successful");
        localStorage.setItem('token', res.token);
        
        if(this.role == 'admin') {
          this.route.navigate(['/admin']);
        }
        if(this.role == 'user') {
          this.route.navigate(['/user']);
        }
      }
    }, err => { 
      alert ("Login failed! Invalid User credentials");
      this.ngOnInit();

    })
  }
}
