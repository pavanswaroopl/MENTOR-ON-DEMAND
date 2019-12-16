import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { skill } from './skill';
import { Mentor_Skill } from './mentorskill';
import { mentor } from './mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  mentor:mentor=null;

  constructor(private httpClient:HttpClient) { }

  getAllSkills():Observable<any>{
    return this.httpClient.get(environment.baseUrl+'authservice/skills');

  }

  addNewMentor(mentor:mentor):Observable<any>{

    return this.httpClient.post(environment.mentorUrl+'addmentordetails',mentor);

  }
  addNewMentorSkill(mentorSkill:Mentor_Skill):Observable<any>{
    return this.httpClient.post(environment.mentorUrl+'addmentorskills',mentorSkill);
  }
  findMentorBySkill(skill:skill):Observable<any> {
    return this.httpClient.post(environment.baseUrl+"searchservice/byskill",skill);
  }
}
