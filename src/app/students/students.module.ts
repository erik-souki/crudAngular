import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    AppMaterialModule
  ]
})
export class StudentsModule { }
