import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    email: '',
    password: ''
  }

  country = {
    country_code: '',
    state_code: ''
  }

  CountryList: any[] = [];
  StateList: any = [];
  CityList: any = [];

  newAccount = {
      first_name: "",
      last_name: "",
      email: "",
      address1: "",
      address2: "",
      country: "",
      state: "",
      city: ""  
  }

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.LoadCountries().subscribe((response: any) => {
      console.log(response);
      this.CountryList = response;
    }, (error) => {
      console.log(error)
    });
  }

  onClickLogin() {
    console.log(this.loginForm);

    this.api.login(this.loginForm).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/dashboard/trash')
    }, (error) => {
      console.log(error);
      alert("Something went wrong")
    })
  }

  onSelectCountry(event: any) {
    // console.log(event.target.value)

    this.country.country_code = event.target.value;

    // console.log(this.country)
    this.api.LoadStates(this.country).subscribe((response) => {
      console.log(response)

      this.StateList = response;
    }, (error) => {
      console.log(error)
    })
  }

  onSelectState(event: any) {
    console.log(event.target.value)
    this.country.state_code = event.target.value;
    console.log(this.country)

    this.api.LoadCities(this.country).subscribe((response)=>{
      console.log(response)
      this.CityList = response;
    },(error)=>{
      console.log(error)
    })
  }

  onCreateAccount(){
    console.log(this.newAccount)
    this.api.RegisterAccount(this.newAccount).subscribe((response)=>{
      console.log(response)
    }, (error)=>{
      console.log(error)
    })
  }
}
