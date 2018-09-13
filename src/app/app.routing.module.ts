import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseProgramLevel } from './courses/course-program-level/course-program-level.component';
import { CourseCreateComponent } from './courses/course-details/course-details.component';

const routes: Routes = [
  { path: '', component: CourseProgramLevel },
  { path: 'explores', component: CourseCreateComponent },
  { path: 'explore/:courseId', component: CourseCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
