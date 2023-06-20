import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentArray = [{ firstName: '', lastName: '', email: '', mobileNumber: '', password: '' ,_id:''}];

  constructor(private http: HttpClient,private router:Router) {}

  ngOnInit(): void {
    this.setStudentList();
  }

  setStudentList() {
    this.getStudentList().subscribe((res: any) => {
      console.log('Resp Student:', res);
      this.studentArray = res['data'];
      console.log('List Student data:', this.studentArray);
    });
  }

  getStudentList() {
    const url = 'http://127.0.0.1:2020/students/getStudents';
    return this.http.get(url);
  }

  deleteStudent(id: any) {
    console.log('Delete function clicked!');
    this.deleteMethod(id).subscribe((res: any) => {
      console.log('Response', res);
      this.setStudentList();
    });
  }

  deleteMethod(id: any) {
    let url = `http://127.0.0.1:2020/students/deleteStudentById/${id}`;
    return this.http.delete(url);
  }

  editStudent(id : any){
    this.router.navigate(['edit'],{ queryParams:{ id: id}});
    console.log("Edit clicked");
  }
}