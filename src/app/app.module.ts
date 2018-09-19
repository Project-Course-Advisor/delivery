import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
   MatCardModule,
   MatButtonModule,
   MatToolbarModule,
   MatExpansionModule,
   MatProgressSpinnerModule,
   MatGridListModule,
   MatDividerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseCreateComponent } from './courses/course-details/course-details.component';
import {HeaderComponent } from './header/header.component';
import { CourseProgramLevel } from './courses/course-program-level/course-program-level.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseCreateComponent,
    HeaderComponent,
    CourseProgramLevel,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
