import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  error:string = '';
  formSubmitted:boolean = false;
  // userList:user[];

  
  constructor(private formBuilder:FormBuilder,private userService:UserService,private authService:AuthService) { }

  ngOnInit() {
    // this.userList = this.userService.userList;
    this.signUpForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern('^[a-z A-Z]+$'), Validators.maxLength(50)]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern('^[a-z A-Z]+$'), Validators.maxLength(50)]),
      'contactNumber' : new FormControl(null, [Validators.required,Validators.pattern('^[0-9]+\.[0-9]*$'),Validators.maxLength(10),Validators.minLength(10)]),
      'userName': new FormControl(null, [Validators.required, Validators.maxLength(20),Validators.minLength(4)]), 
      'password': new FormControl(null, [Validators.required,  Validators.minLength(3)]),
      'role':new FormControl(null,[Validators.required]),
    });
    

  }
  get userName() {
    return this.signUpForm.get('userName');
  }
  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get contactNumber(){
    return this.signUpForm.get('contactNumber');
  }
  get role(){
    return this.signUpForm.get('role');
  }

  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signUpForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }

}
