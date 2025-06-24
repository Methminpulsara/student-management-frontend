import { Component } from '@angular/core';
import Student from '../../models/student';
import StudentService from '../../service/stuendService';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-create-student',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {


  constructor(private studentService:StudentService) {
  }


  public student: Student ={
    id:0,
    name:"",
    age: 1,
    details:""
  }


  addStudent(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }
    this.studentService.create(this.student).subscribe(
      res => alert("Successfully created!"),
      err => alert("Error creating student!")
    );
  }


}
