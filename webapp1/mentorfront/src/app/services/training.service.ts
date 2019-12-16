import { Injectable } from '@angular/core';
import { Training } from './training';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { skill } from './skill';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http:HttpClient,private authService:AuthService) { }
  // sendTrainingRequest(training:Training):Observable<any> {
  //   return this.http.post(environment.baseUrl+"trainingservice/requestTraining",training);
  // }
  sendTrainingRequest(training: Training): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.accessToken);
    return this.http.post(environment.baseUrl+"trainingservice/requestTraining", training, {headers});
  }

  getIncompleteTrainingObservable():Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.accessToken);
    return this.http.get(environment.baseUrl+"trainingservice/getIncompleteTraining/"+this.authService.userName+"/", {headers});
  }

  saveStatusChangedTraining(training:Training):Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.accessToken);
    return this.http.post(environment.baseUrl+"trainingservice/editStatus/", training, {headers});
  }
  
  addMentorSkillAfterLogin(skill:skill,userName:string,yearsExperience:number,selfRating:number):Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.accessToken);
    return this.http.post(environment.baseUrl+"trainingservice/addSkillLogin/"+userName+"/"+yearsExperience+"/"+selfRating+"/", skill, {headers});
  }
}
