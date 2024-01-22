import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Student } from '../model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly API = 'api/students';
  http: any;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Student[]>(this.API)
    .pipe(
      first(),
      tap(students => console.log(students))
    );
  }

  getStudents(): Observable<any> {
    return this.http.get(this.API);
  }

}

