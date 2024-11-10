import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favourites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFromFavorites(item: any) {
    this.favoritesService.removeFavorite(item);
    this.favorites = this.favoritesService.getFavorites();
  }
}
