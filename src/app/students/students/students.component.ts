import { StudentsService } from './../services/students.service';
import { Component } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [];
  displayedColumns = ['name','ra'];

  //studentsService:StudentsService

  constructor(private studentsService: StudentsService) {
   // this.studentsService = new StudentsService();
    this.students = this.studentsService.list();
  }


}
