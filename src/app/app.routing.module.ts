import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseProgramLevel } from './courses/course-program-level/course-program-level.component';
import { CourseCreateComponent } from './courses/course-details/course-details.component';
import { PostCreateComponent } from './courses/post-create/post-create.component';
import { PostListComponent } from './courses/post-list/post-list.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: CourseProgramLevel },
  { path: 'explores', component: CourseCreateComponent, canActivate: [AuthGuard] },
  { path: 'posts', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'listposts', component: PostListComponent, canActivate: [AuthGuard] },
  { path: 'explore/:courseId', component: CourseCreateComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
