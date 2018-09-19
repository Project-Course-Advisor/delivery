import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseProgramLevel } from './courses/course-program-level/course-program-level.component';
import { CourseCreateComponent } from './courses/course-details/course-details.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: CourseProgramLevel },
  { path: 'explores', component: CourseCreateComponent },
  { path: 'explore/:courseId', component: CourseCreateComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
