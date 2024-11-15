import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
    console.log('Cart Items:', this.cartItems); 
  }

  removeItemFromCart(item: any): void {
    this.cartService.removeFromCart(item);  
    this.cartItems = this.cartService.getCartItems();  
    this.totalPrice = this.cartService.getTotalPrice(); 
    console.log(`Item removed from cart: ${item.name}`);  
  }
}
