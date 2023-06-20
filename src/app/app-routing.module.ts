import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: RegistrationComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'edit', component: StudentEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
