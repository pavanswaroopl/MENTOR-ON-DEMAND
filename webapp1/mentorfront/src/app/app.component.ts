import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mentorfront';
  isAdmin:boolean;
  ngOnInit(): void {
    this.loggedIn();
    this.router.navigate(['main-page']);
  }

  constructor(private authService:AuthService,public router: Router) {  
  }
  isLoggedIn:boolean = false;
  
  
  refresh(): void {
    window.location.reload();
}

  loggedIn():boolean {
    if(!this.authService.loggedInUser.loggedOut){
      this.isLoggedIn = true;
      return true
    }
    else{
      this.isLoggedIn = false;
      return false;
    }
  }
}
