import { Component } from '@angular/core';
import { StudentCardComponent } from "../components/student-card/student-card.component";

@Component({
  selector: 'app-card-container',
  imports: [StudentCardComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {

}
