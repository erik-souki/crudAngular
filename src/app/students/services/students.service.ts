import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) {}

  list(): Student[] {
    return [
      {_id:'1',name:'Angular',ra:'front-end'}
    ];
  }

}
