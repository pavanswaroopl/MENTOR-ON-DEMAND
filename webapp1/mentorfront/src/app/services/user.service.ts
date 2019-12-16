import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from './skill.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from './user';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService { 
  constructor(private router:Router,private http:HttpClient,private skillService:SkillService,private authService:AuthService) { }

  userExist:boolean=true;
  private token:string = null;
  private role:string = null;
  private displayName:string = null;
  private currentUserName:string = null;
  private currentUser:user = null;

 
 
  getCurrentUser():user {
    return this.currentUser;
  }
  setCurrentUser(currentUser:user) {
    this.currentUser = currentUser;
  }
  getCurrentUserName():string {
    return this.currentUserName;
  }
  setCurrentUserName(currentUserName:string) {
    this.currentUserName = currentUserName;
  }
  getDisplayName():string {
    return this.displayName;
  }
  setDisplayName(displayName:string) {
    this.displayName = displayName;
  }
  getToken():string {
    return this.token;
  }
  setToken(token:string){
    this.token = token;
  }
  getRole():string {
    return this.role;
  }
  setRole(role:string) {
    this.role = role;
  }
  // userList = [
  //   {username:'admin',firstname:"Pavan",lastname:"Swaroop",password:"truYum"},
  //   {username:'rushhour',firstname:"jack",lastname:"jones",password:"whoru"}
  // ];
  

  addUser(user:any) {
    let NewUsers:user={userName:user['userName'],firstName:user['firstName'],lastName:user['lastName'],password:user['password'],contactNumber:user['contactNumber'],role:user['role'],resetPassword:user['resetPassword'],resetPasswordDate:user['resetPasswordDate']};
    console.log(NewUsers)
    this.addUsers(NewUsers).subscribe(data=>{this.userExist=data;
    if(NewUsers.role=="User"){
      if(data){
      window.alert("Your Details are Saved Successfully !")
      this.router.navigate(['login'])
      }

    }
    else{
      this.skillService.mentor={id:null,linkedinUrl:null,timeslot:null,yearsOfExperience:null,user:user};
      this.router.navigate(['addMentorDetails']);
    }
    }, (error)=>{console.log(error)})
   
  }

  addUsers(user:user):Observable<any>{
    return this.http.post<user>(environment.baseUrl+'authservice/users',user);
  }
  getUser():Observable<any> {
    return this.http.get(environment.baseUrl+'authservice/users/'+this.authService.userName);
  }
  getCurrentUserFromDataBase() {
    console.log(this.authService.userName);
    
    this.getUser().subscribe(
      (data)=>{
        this.currentUser = data;
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  
}
