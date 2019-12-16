import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { user } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {loggedInUser={loggedOut:true};
validCredentials:boolean = true;
accessToken: string; // JWT token
redirectUrl = '/';
loggedIn:boolean = false;
name:string;
baseUrl = environment.baseUrl;
private token: string;
error: string = "Login Failed";
role:string;
isAdmin:boolean=false;
clickedOnAdd:boolean=false;
addedToCart:boolean=false;
userName:any;
userStatus:boolean=false;

authenticateSpring(user:string,password:string):Observable<any> {
  console.log(user)
  let credentials = btoa(user+':'+password);
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Basic '+credentials)
  return this.http.get(this.baseUrl+"authservice/authentication", {headers})
  

}
public setToken(token: string) {
  this.token = token;
}
public getToken() {
  return this.token;
}
constructor(public router: Router,private http:HttpClient) { }

authenticateUser(user) {
 this.authenticateSpring(user.userName,user.password).subscribe(
    (data)=>{
      if(data.token==null){
        this.userStatus=true;
      }else{
      console.log(data.role)
      this.role=data.role;
      this.loggedInUser = user.userName;
      this.validCredentials = true;
      if(data.role=='Mentor'){
        console.log(data.role)
        this.isAdmin=true;
        this.loggedIn=true;
        this.userName=data.userName;
        this.accessToken=data.token;
        this.router.navigate(['mentor']);

      }else{
        console.log(this.role)
        this.isAdmin=false;
        this.loggedIn=true;
        this.userName=data.userName;
        console.log(this.userName)
        this.accessToken=data.token;
        this.router.navigate(['main-page']);
      }
    }
      
    },
    (error)=>{
      this.validCredentials = false;
      console.log(error);
      console.log("ERROR");
      this.error = error.error.message;
      if (error.error.errors != null) {
        this.error = error.error.errors[0];
      }
    }
    )

}
logout() {
  this.loggedInUser = {loggedOut:true};
  this.isAdmin = false;
  this.loggedIn = false;
  this.clickedOnAdd = false;
  this.addedToCart = false;
  this.router.navigate(['login']);
  //this.router.navigate(['search-bar']);
}

}
