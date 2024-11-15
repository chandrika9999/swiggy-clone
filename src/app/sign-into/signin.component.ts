import { CommonModule } from '@angular/common';
import { ParseSourceFile } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginSignUpService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  @Output() close = new EventEmitter<void>();
  isVisible = false;
  isLogin: boolean=true;
  isSignUp: boolean=false;
  user:any;
  showLoginError:boolean=false;
  errorLogin!:string;


  userLoginDetails!:FormGroup;
  userRegistrationDetails!:FormGroup;
  constructor(private formBuilder:FormBuilder,private loginSignUpService:LoginSignUpService, private userService: UserService)
  {
    this.userLoginDetails = this.formBuilder.group({
      mobile:['',[Validators.required,Validators.pattern(/^\d{10}/)]],
      password:['',[Validators.required,Validators.minLength(5)]]
    });

    this.userRegistrationDetails = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern(/^\d{10}/)]],
      password:['',[Validators.required,Validators.minLength(5)]]
    });
  }

  toggleLoginSignup(){
    this.isLogin=!this.isLogin;
    this.isSignUp=!this.isSignUp;
  }

  openOverlay() {
    console.log("a");
    console.log("Overlay visible:", this.isVisible);
    this.isVisible = true;
    console.log("Overlay visible:", this.isVisible);
  }

  closeOverlay() {
    this.isVisible = false;
    this.close.emit(); 
  }

  submitLoginForm(){
    if(this.userLoginDetails?.valid)
    {
      console.log(this.userLoginDetails.value);
      this.loginSignUpService.submitLoginData(this.userLoginDetails.value)
      .subscribe({
        next: (data: any) => {
          this.user=data.find((u:any)=>{
            return (u.mobile==this.userLoginDetails.value.mobile && u.password==this.userLoginDetails.value.password);
        });
          if(this.user){
            this.userService.userSignIn(this.user);
            this.isVisible=false;
          }
          else{
            this.showLoginError=true;
            this.errorLogin='Invalid credentials';
            setTimeout(()=>{
              this.showLoginError=false;
            },5000)
          }
        },
        error: (error: any) => {
          console.error('Error fetching users:', error);
          this.errorLogin="Error Fetching Details";
          this.showLoginError=true;
            setTimeout(()=>{
              this.showLoginError=false;
            },5000)
        }
      });
    }
  }
  submitRegistrationForm(){
    if(this.userRegistrationDetails?.valid)
    {
      console.log(this.userRegistrationDetails.value);
      this.loginSignUpService.submitRegistrationData(this.userRegistrationDetails.value).subscribe({
        next: (response) => {
          console.log('Data submitted successfully:', response);
          this.toggleLoginSignup();
        },
        error: (error) => {
          console.error('Error submitting data:', error);
          this.showLoginError=true;
            this.errorLogin='Error Submitiing Data. Try Again Later';
            setTimeout(()=>{
              this.showLoginError=false;
            },5000)
        }
      })
    }
  }
}
