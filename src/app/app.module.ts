import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
   MatCardModule,
   MatButtonModule,
   MatToolbarModule,
   MatExpansionModule,
   MatProgressSpinnerModule,
   MatGridListModule,
   MatSnackBarModule,
   MatPaginatorModule,
   MatDividerModule,
   MatIconModule} from '@angular/material';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseCreateComponent } from './courses/course-details/course-details.component';
import { PostCreateComponent } from './courses/post-create/post-create.component';
import { PostListComponent } from './courses/post-list/post-list.component';
import {HeaderComponent } from './header/header.component';
import { CourseProgramLevel } from './courses/course-program-level/course-program-level.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CourseCreateComponent,
    PostCreateComponent,
    PostListComponent,
    HeaderComponent,
    CourseProgramLevel,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
