import { Component, OnInit, OnDestroy } from '@angular/core';
import {Course} from '../course.model';
import { CourseService } from '../course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-program-level',
  templateUrl: './course-program-level.components.html',
  styleUrls: ['./course-program-level.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class CourseProgramLevel implements OnInit, OnDestroy {
  // courses = [
  //   { title: 'First', content: 'Description' },
  //   { title: 'Second', content: 'Description' },
  //   { title: 'First', content: 'Description' }
  // ];

  courses: Course[] = [];
  isLoading = false;
  private coursesSub: Subscription;

  constructor(public coursesService: CourseService) {}

  ngOnInit() {
    this.coursesService.getCourse();
    this.isLoading = true;
    this.coursesSub = this.coursesService.getCourseUpdateListener()
      .subscribe((courses: Course[]) => {
        this.isLoading = false;
        this.courses = courses;
    });
    console.log(this.courses);
  }

  onDelete(courseId: string) {
    this.coursesService.deleteCourse(courseId);
  }

  ngOnDestroy() {
    this.coursesSub.unsubscribe();
  }
}
