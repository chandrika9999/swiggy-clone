import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { FavoritesComponent } from './favourites/favourites.component';
import { CartComponent } from './cart/cart.component';
// import { TopbarComponent } from './topbar/topbar.component'; 
// import { FavoritesComponent } from './favourites/favourites.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"restaurant/:id",
        component: RestaurantDetailsComponent
    },
    {
        component: FavoritesComponent,
        path: 'favourites'
    },
    {
        component: CartComponent,
        path:'cart'
    }
];
