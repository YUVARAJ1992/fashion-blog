import { Component, OnInit } from '@angular/core';
import { Model } from './inbox.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  registerForm : Model.RegisterForm = {
    firstName : '',
    lastName : '',
    emailId : '',
    password : '',
    dob : '',
    hobbies : [],
    city : '',
    address : '',
    gender : ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onRegister(){
    console.log(this.registerForm)
  }

  onChangeCheckbox(event : any){
    console.log(event.target.value, event.target.checked );

    if(event.target.checked){
      this.registerForm.hobbies.push(event.target.value)
    }else{
      const index = this.registerForm.hobbies.findIndex((value) => {
        return value === event.target.value;
      });
      this.registerForm.hobbies.splice(index, 1)

    }
  }

}
