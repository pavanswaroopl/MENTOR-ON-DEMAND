import { Injectable } from '@angular/core';
import { mentor } from './mentor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Mentor_Skill } from './mentorskill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  mentor:mentor=null;

  constructor(private httpClient:HttpClient ) { }

  getAllSkills():Observable<any>{
    return this.httpClient.get(environment.baseUrl+'authservice/skills');

  }

  addNewMentor(mentor:mentor):Observable<any>{

    return this.httpClient.post(environment.mentorUrl+'addmentordetails',mentor);

  }
  addNewMentorSkill(mentorSkill:Mentor_Skill):Observable<any>{
    return this.httpClient.post(environment.mentorUrl+'addmentorskills',mentorSkill);
  }
}
