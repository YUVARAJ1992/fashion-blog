import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = {
    email : '',
    password: ''
  } 

  constructor(private api : ApiService, private router : Router) { }

  ngOnInit(): void {
  }

  onClickLogin(){
    console.log(this.loginForm);

    this.api.login(this.loginForm).subscribe((response)=>{
      console.log(response);
      this.router.navigateByUrl('/newdashboard')
    },(error)=>{
      console.log(error);
      alert("Something went wrong")
    })
  }

}
