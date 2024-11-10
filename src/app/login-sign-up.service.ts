import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignUpService {

  constructor(private http: HttpClient) { }
  
  submitLoginData(loginDetails:any): Observable<any>{
    return this.http.get('https://6728d4eb6d5fa4901b6b1fae.mockapi.io/Swiggy-clone'); 
  }

  submitRegistrationData(signupDetails:any): Observable<any>{
    return this.http.post<any>('https://6728d4eb6d5fa4901b6b1fae.mockapi.io/Swiggy-clone',signupDetails);    
  }

}
