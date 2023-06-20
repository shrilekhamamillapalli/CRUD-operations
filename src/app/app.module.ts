import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';

@NgModule({

  declarations: [

    AppComponent,

    RegistrationComponent,
     StudentListComponent,
     StudentEditComponent

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    FormsModule,

    HttpClientModule

  ],

  providers: [HttpClient],

  bootstrap: [AppComponent]

})

export class AppModule { }