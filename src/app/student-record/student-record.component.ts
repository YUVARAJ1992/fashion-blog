import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css']
})
export class StudentRecordComponent implements OnInit {

  studentList: any[] = [];
  fullStudentList: any[] = [];

  studentNewEntry: any = {
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  }

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList() {
    this.api.loadStudentRecord().subscribe((response: any) => {
      console.log(response);
      this.studentList = response.data;
      this.fullStudentList = response.data;
    }, (error) => {
      console.log(error);
    })
  }

  onSelectStudent(event: any) {
    //console.log(event.target.value)
    if (event.target.value == "Show All Student List") {
      this.studentList = this.fullStudentList;

    } else {
      const filtered = this.fullStudentList.filter((value) => {
        return value.first_name == event.target.value;
      });
      this.studentList = filtered;
    }
  }

  addNewStudent() {
    console.log(this.studentNewEntry)
    this.fullStudentList.push(this.studentNewEntry);
    this.studentNewEntry = {
      id: '',
      email: '',
      first_name: '',
      last_name: '',
      avatar: ''
    }
  }


}
