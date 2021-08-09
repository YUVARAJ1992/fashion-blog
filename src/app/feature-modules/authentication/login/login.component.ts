import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordShowHide : boolean = true;

  loginForm = {
    email : '',
    password: ''
  }
  constructor( private api : ApiService , private router : Router) { }

  ngOnInit(): void {
  }

  showHidePassword(){
    this.passwordShowHide = !this.passwordShowHide;
    
  }

  onClickLogin(){
    console.log(this.loginForm);

    this.api.login(this.loginForm).subscribe((response)=>{
      console.log(response);
      this.router.navigateByUrl('/home')
    },(error)=>{
      console.log(error);
      alert("Something went wrong")
    })
  }
}
