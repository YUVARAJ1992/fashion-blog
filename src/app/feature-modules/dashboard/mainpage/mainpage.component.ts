import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  loginForm = {
    email : '',
    password: ''
  } 

  constructor(private api : ApiService, private router : Router) { }

  ngOnInit(): void {
  }

  onClickLogin(){
    this.api.login(this.loginForm).subscribe((response)=>{
      console.log(response);
      this.router.navigateByUrl('/newdashboard')
    },(error)=>{
      console.log(error);
      this.router.navigateByUrl('/newlogin')
    })
  }
}
