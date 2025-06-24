import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import studentService from '../service/stuendService';
import Student from '../models/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'student-managment-frontend';

  constructor(private studentService: studentService) {}

  private studnet: Student = {
    id: 1,
    name: '',
    age: 1,
    details: '',
  };

  getAll() {
    this.studentService.getAll().subscribe((res) => {
      console.log(res);
    });
  }

  add() {
    this.studentService.create(this.studnet).subscribe((res) => {
      console.log(res);
    });
  }

  delete(id:number){
    this.studentService.delete(id).subscribe((res) => {
      console.log(res);
    });
  }

}
