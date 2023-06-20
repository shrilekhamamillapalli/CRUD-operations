import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent {
 
   //=====Variable Declarations=====
   firstName: string = '';
   lastName: string = '';
   email: string = '';
   mobileNumber: string = '';
   password: string = '';
   id:string ='';

   success:boolean=false;

   constructor(private route: ActivatedRoute,private http:HttpClient,private router: Router) { }

   ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        console.log('Got the STU ID as: ', params['id']);
        this.id =  params['id'];
        this.getStudentDetails(params['id']).subscribe((res:any)=>{
          console.log(res);
          this.firstName = res['data'][0]['firstName'];
          this.lastName = res['data'][0]['lastName'];
          this.email = res['data'][0]['email'];
          this.mobileNumber = res['data'][0]['mobileNumber'];
          this.password = res['data'][0]['password'];
        })
      }
    )
  }

  getStudentDetails(id:any){

    let url=`http://127.0.0.1:2020/students/getStudentById/${id}`;
    return this.http.get(url);
  }

  updateRegistration(){

    this.update().subscribe(res=>{
      console.log(res);
      this.success=true;
    })

  }

  update(){
    let url = "http://127.0.0.1:2020/students/updateStudent";

    let req = {
      "id" : this.id,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "mobileNumber": this.mobileNumber,
      "password": this.password
    };

    return this.http.put(url, req);
  }

  goBack(){
    this.router.navigate(['students']);
  }
}
