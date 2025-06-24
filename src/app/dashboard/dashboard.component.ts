import { Component } from '@angular/core';
import { CardContainerComponent } from "../card-container/card-container.component";

@Component({
  selector: 'app-dashboard',
  imports: [CardContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
