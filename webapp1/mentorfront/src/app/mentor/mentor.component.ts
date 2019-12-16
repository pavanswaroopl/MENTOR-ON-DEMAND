import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { skill } from '../services/skill';
import { Router } from '@angular/router';
import { SkillService } from '../services/skill.service';
import { MentorService } from '../services/mentor.service';
import { Mentor_Skill } from '../services/mentorskill';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {constructor(private fb:FormBuilder,private router:Router,private skillService:SkillService) { }
signupForm:FormGroup;


ngOnInit() {this.signupForm=this.fb.group({
  linkedinUrl:["",[Validators.required]],
  yearsOfExperience:["",[Validators.required]],
  timeslot:["",[Validators.required]]
  
});
}
get linkedinUrl() {
return this.signupForm.get('linkedinUrl');
}
get yearsOfExperience() {
return this.signupForm.get('yearsOfExperience');
}
get timeslot() {
return this.signupForm.get('timeslot');
}

addMentorDetails(MentorForm:any){
this.skillService.mentor.linkedinUrl=MentorForm['linkedinUrl'];
this.skillService.mentor.timeslot=MentorForm['timeslot'];
this.skillService.mentor.yearsOfExperience=MentorForm['yearsOfExperience'];
this.skillService.addNewMentor(this.skillService.mentor).subscribe(data=>{
  alert("Click okay to add Skills");
  this.router.navigate(['SkillAdd'])
})

}

}
