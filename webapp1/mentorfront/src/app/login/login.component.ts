import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  loginClicked:boolean=false;
  userStat:boolean=false;
  errorMessage = null;

  constructor(private formBuild:FormBuilder,private authService:AuthService,private router:Router ) { }

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      userName: ['',[
        Validators.required,
        // Validators.maxLength(45),
        // Validators.minLength(10),
        // Validators.email
      ]],
      password: ['',[
        Validators.required
      ]]
    }),
    (error) => {
      console.log(error);
      this.errorMessage = "Credentials Invalid";
    }
  }
  get userName(){
    return this.loginForm.get('userName');
  }
  get password(){
    return this.loginForm.get('password');
  }
  toSignup() {
    this.router.navigate(['signup'])
  }
onSubmit(){
  this.authService.authenticateUser(this.loginForm.value);
  this.loginClicked=true;
  
}

}
