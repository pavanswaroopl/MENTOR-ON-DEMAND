import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MentorgaurdService {  
  
constructor(private authService:AuthService, private router:Router) { }

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if (this.authService.role == "Mentor") {
    return true;
  }
  this.router.navigate(["/login"]);
  return false;
}
}
