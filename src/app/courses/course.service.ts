import { Course } from './course.model';
import { Injectable } from '../../../node_modules/@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CourseService {
  private courses: Course[] = [];
  private coursesUpdated = new Subject<Course[]>();

  constructor(private http: HttpClient) {}

  getCourse() {
    this.http.get<{message: string, courses: any }>('http://localhost:3000/api/courses')
    .pipe(map((courseData) => {
      return courseData.courses.map(course => {
        return{
          title: course.title,
          content: course.content,
          id: course._id
        };
      });
    }))
    .subscribe((transformedCourses) => {
        this.courses = transformedCourses;
        this.coursesUpdated.next([...this.courses]);
    });
  }

  getCourseDetails(id: string) {
    console.log({...this.courses.find(c => c.id === id)});
    return {...this.courses.find(c => c.id === id)};
  }

  getCourseUpdateListener() {
    return this.coursesUpdated.asObservable();
  }

  getCourseWithId(id: string) {
    return this.http.get<{_id: string, title: string, content: string}>('http://localhost:3000/api/courses/' + id);
  }
  addCourse(title: string, content: string) {
    const course: Course = {id: null, title: title, content: content};
    // this.http
    // .post<{ message: string, courseId: string }>("http://localhost:3000/api/courses". course)
    // .subscribe(responseData => {
    //   const courseId = responseData.courseId;
        //  course.id = id;
    //   this.courses.push(course);
    // this.coursesUpdated.next([...this.courses]);
    // });
    this.courses.push(course);
    this.coursesUpdated.next([...this.courses]);
  }

  deleteCourse(courseId: string) {
    this.http.delete('http://localhost:3000/api/courses/' + courseId)
    .subscribe(() => {
      const updatedCourses = this.courses.filter(course => course.id !== courseId);
      this.courses = updatedCourses;
      this.coursesUpdated.next([...this.courses]);
    });
  }

  // updateCourse(courseId: string) {
  //   this.http.put('http://localhost:3000/api/course/')
  // }

}
