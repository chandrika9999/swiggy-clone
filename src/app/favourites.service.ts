
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];

  addFavorite(item: any) {
    this.favorites.push(item);
  }

  removeFavorite(item: any) {
    this.favorites = this.favorites.filter(fav => fav.id !== item.id);
  }

  getFavorites() {
    return this.favorites;
  }

  isFavorite(item: any): boolean {
    return this.favorites.some(fav => fav.id === item.id);
  }
}
