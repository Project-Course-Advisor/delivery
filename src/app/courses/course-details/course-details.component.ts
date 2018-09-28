import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CourseService } from '../course.service';
import { SubcourseService } from '../subcourse.service';
import { Course } from '../course.model';
import { Subcourse } from '../subcourse.model';
import { Subscription } from 'rxjs';

@Component( {
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseCreateComponent implements OnInit {
  enteredValue = '';
  newCourse = 'Nothing Here';
  private modes = 'explores';
  private courseId: string;
  course: Course;
  isLoading = false;
  subcourse: Subcourse[] = [];
  private subcoursesSub: Subscription;

  constructor(public coursesService: CourseService, public route: ActivatedRoute, public subcourseService: SubcourseService) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('courseId')) {
          this.modes = 'explore';
          this.courseId = paramMap.get('courseId');
          this.course = this.coursesService.getCourseDetails(this.courseId);
          this.subcourseService.getSubcourseDetails(this.courseId);
          this.subcoursesSub = this.subcourseService.getSubcourseUpdateListener()
          .subscribe((subcourses: Subcourse[]) => {
            this.isLoading = false;
            this.subcourse = subcourses;
          });
          console.log(this.subcourse);
          this.isLoading = false;
      } else {
        this.modes = 'explores';
        this.courseId = null;
      }
    });
  }
  onClickCourse() {
    this.newCourse = this.enteredValue;
  }
}
