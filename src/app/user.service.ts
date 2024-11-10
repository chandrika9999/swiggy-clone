import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();

  private userDetails = new BehaviorSubject<any>({})
  userDetails$:Observable<any> = this.userDetails.asObservable();
  // userDetails!: any;
  
  userSignIn(user: any){
    this.isLoggedIn.next(true);
    this.userDetails.next(user);
  }

  userSignOut(){
    this.isLoggedIn.next(false);
    this.userDetails.next({});
  }

}
