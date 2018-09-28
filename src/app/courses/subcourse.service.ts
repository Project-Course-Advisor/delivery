import { Subcourse } from './subcourse.model';
import { Injectable } from '../../../node_modules/@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class SubcourseService {
  private subcourses: Subcourse[] = [];
  private subcoursesUpdated = new Subject<Subcourse[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getSubcourseDetails(id: string) {
   this.http.get<{message: string, subcourse: any}>('http://localhost:3000/sub/courses/' + id)
   .pipe(map((subcourseData) => {
    return subcourseData.subcourse.map(subcourse => {
      console.log(subcourse);
      return{
        title: subcourse.title,
        content: subcourse.content,
        id: subcourse._id,
        uni: subcourse.uni
      };
    });
  }))
  .subscribe((transformedCourses) => {
      this.subcourses = transformedCourses;
      this.subcoursesUpdated.next([...this.subcourses]);
  });
  }

  getSubcourseUpdateListener() {
    return this.subcoursesUpdated.asObservable();
  }
}
