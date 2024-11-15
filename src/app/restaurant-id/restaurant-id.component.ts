import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './restaurant-id.component.html',
  styleUrl: './restaurant-id.component.css'
})
export class RestaurantCardComponent {
  @Input() restaurant: any;
}
