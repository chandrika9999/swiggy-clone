import { Component, ElementRef, ViewChild, OnInit, Renderer2 } from '@angular/core';
import { RestaurantCardComponent } from '../restaurant-id/restaurant-id.component';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../restaurant.service';
import { RouterLink } from '@angular/router';
import { SigninComponent } from '../sign-into/signin.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RestaurantCardComponent, CommonModule, RouterLink,SigninComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  restaurants !: any[];
  isLoggedIn:boolean|undefined;
  constructor(private restaurantService: RestaurantService,private renderer: Renderer2, private userService:UserService){}



  @ViewChild('cardsWrapper') cardsWrapper!: ElementRef;

  ngOnInit(): void {
    this.userService.isLoggedIn$.subscribe((value: any)=>this.isLoggedIn=value);
    this.restaurants=this.restaurantService.getRestaurantDetails();
  }
  private cardWidth!: number;
  private currentScrollPosition = 0;
  private maxScrollPosition!: number;

  ngAfterViewInit() {
    this.cardWidth = this.cardsWrapper.nativeElement.clientWidth / 3.5;
    this.maxScrollPosition = (this.restaurants.length - 3) * this.cardWidth;
  }

  scrollLeft() {
    this.currentScrollPosition = Math.max(this.currentScrollPosition - this.cardWidth * 1.5, 0);
    this.updateScroll();
  }

  scrollRight() {
    this.currentScrollPosition = Math.min(this.currentScrollPosition + this.cardWidth * 1.5, this.maxScrollPosition);
    this.updateScroll();
  }

  private updateScroll() {
    this.cardsWrapper.nativeElement.scrollTo({
      left: this.currentScrollPosition,
      behavior: 'smooth'
    });
  }

  @ViewChild('signin') signin!: SigninComponent;
  @ViewChild('bg') bg!: ElementRef;


  showSignIn() {
    this.signin.openOverlay();
    this.renderer.setStyle(this.bg.nativeElement, 'backgroundColor', 'rgba(0,0,0,0,5)');
    this.bg.nativeElement;
  }

  hideSignIn() {

    this.renderer.setStyle(this.bg.nativeElement, 'backgroundColor', 'transparent');
  }
  signOut(){
    this.userService.userSignOut();
  }


}
