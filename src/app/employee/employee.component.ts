import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  NewEmployee: any = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    designation: '',
    dob: '',
    skills: []
  }

  EmployeeList: any = [];

  LoginForm = {
    email: '',
    password: ''
  }

  passwordShowHide : boolean = true;

  showHidePassword(){
    this.passwordShowHide = !this.passwordShowHide; 
  }

  constructor() { }

  ngOnInit(): void {
  }

  onChangeCheckbox(event: any) {
    console.log(event.target.value, event.target.checked);

    if (event.target.checked) {
      this.NewEmployee.skills.push(event.target.value);
    } else {
      const index = this.NewEmployee.skills.findIndex((value: any) => {
        return value == event.target.value;
      });
      this.NewEmployee.skills.splice(index, 1)
    }
  }

  addNewEmployee() {
    //console.log(this.NewEmployee)
    this.EmployeeList.push(this.NewEmployee)
    console.log(this.EmployeeList)
  }

  onClickLogin() {
    console.log(this.LoginForm)
  }
}
