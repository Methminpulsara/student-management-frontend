import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CommonModule}  from '@angular/common';

@Component({
  selector: 'app-student-card',
  imports: [FormsModule,CommonModule],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {

}
