import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  

  userProfileList : any[] = [];

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.loadTableData().subscribe((response : any)=>{
      console.log(response);
      this.userProfileList = response.data;
    
    }, (error)=>{
      console.log(error);
    });
  }

  onSelectID( event : any){
    console.log(event.target.value)

    let filteredList = this.userProfileList.filter((value) => {
      return value.id == event.target.value 
    });

    console.log(filteredList)
  }

  

}
