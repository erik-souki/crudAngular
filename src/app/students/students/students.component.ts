import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Student } from '../model/student';
import { StudentsService } from './../services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students$: Observable <Student[]>;
  displayedColumns = ['name','ra'];

  //studentsService:StudentsService

  constructor(
    private studentsService: StudentsService,
    public dialog: MatDialog
    ) {

   // this.studentsService = new StudentsService();

    this.students$ = this.studentsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os alunos');
        return of([])
      })
    );
  }




  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}




