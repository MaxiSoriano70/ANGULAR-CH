import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from '../student/student.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, StudentComponent, RouterModule
  ],
  exports: [
    CommonModule, StudentComponent, RouterModule
  ]
})
export class SharedModule { }
