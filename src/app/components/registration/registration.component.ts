import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({

  selector: 'app-registration',

  templateUrl: './registration.component.html',

  styleUrls: ['./registration.component.scss']

})

export class RegistrationComponent implements OnInit {

  //=====Variable Declarations=====

  firstName: string = '';

  lastName: string = '';

  email: string = '';

  mobileNumber: string = '';

  password: string = '';

  success: boolean = false;

  constructor(private http: HttpClient) { }
  ngOnInit() {

    this.get().subscribe(res => {

      console.log('data response', res);

    });

  }
  public get(): Observable<any> {

    return this.http.get("http://127.0.0.1:2020/students/getStudents").pipe(map(res => res));

  }

  submitRegistration() {

    this.success = false;

    this.post().subscribe(resp => {

      console.log(resp);

      this.success = true;

    })

  }
  public post() {

    let url = "http://127.0.0.1:2020/students/createStudent";

    let req = {

      "firstName": this.firstName,

      "lastName": this.lastName,

      "email": this.email,

      "mobileNumber": this.mobileNumber,

      "password": this.password

    };

    return this.http.post(url, req);

  }




}