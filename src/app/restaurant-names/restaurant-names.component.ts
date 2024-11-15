import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service'; 
import { FavoritesService } from '../favourites.service'; 

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-names.component.html',
  styleUrls: ['./restaurant-names.component.css'] 
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant_id!: number;
  restaurant_details: any | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private cartService: CartService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.restaurant_id = +id;

      this.restaurant_details = this.restaurantService.getRestaurantDetails().find((r) => r.res_id === this.restaurant_id);
      if (this.restaurant_details) {
       
      }
      else {
        console.error('Restuarant_details not found!');
      }

    }
    else {
      console.error('An error occured');
    }
    
    console.log(this.restaurant_details);
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  addToFavorites(item: any) {
    if (this.isFavorite(item)) {
      this.favoritesService.removeFavorite(item);
    } else {
      this.favoritesService.addFavorite(item);
    }
  }

  isFavorite(item: any): boolean {
    return this.favoritesService.isFavorite(item);
  }
}
