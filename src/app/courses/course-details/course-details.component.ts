import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CourseService } from '../course.service';
import { Course } from '../course.model';
import { Subcourse } from '../subcourse.model';

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
  subcourse: Subcourse;

  constructor(public coursesService: CourseService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('courseId')) {
          this.modes = 'explore';
          this.courseId = paramMap.get('courseId');
          this.course = this.coursesService.getCourseDetails(this.courseId);
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
