import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL : string ="https://reqres.in/api"

  constructor( private http : HttpClient) { }

  login(data : any){
    const url : string = this.baseURL +"/login";
    return this.http.post(url, data);
  }

  loadTableData(){
    const url : string = this.baseURL + "/users?page=2";
    return this.http.get(url);
  }

  loadProduct(){
    const url : string = "https://fakestoreapi.com/products";
    return this.http.get(url);
  }

  loadCategories(){
    const url : string = "https://fakestoreapi.com/products/categories";
    return this.http.get(url);
  }

  loadStudentRecord(){
    const url : string =  this.baseURL + "/users?page=2";
    return this.http.get(url);
  }

  LoadCountries(){
    const url = "https://concord-test.herokuapp.com/api/countries";
    return this.http.get(url);
  }

  LoadStates(data : any){
    const url = "https://concord-test.herokuapp.com/api/states";
    return this.http.post(url, data)
  }

  LoadCities(data : any){
    const url = "https://concord-test.herokuapp.com/api/cities";
    return this.http.post(url, data)
  }

  RegisterAccount(data : any){
    const url = "https://concord-test.herokuapp.com/api/register";
    return this.http.post(url, data)
  }
}
