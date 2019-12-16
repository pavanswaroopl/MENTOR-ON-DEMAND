import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from '../services/skill.service';
import { skill } from '../services/skill';
import { Mentor_Skill } from '../services/mentorskill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  constructor(private formbuilder:FormBuilder,private router:Router,private skillService:SkillService) { }
  signupForm:FormGroup;
  skills:skill[] = [];

  ngOnInit() {
    this.buildsignupForm()
    this.skills=[];
    this.skillService.getAllSkills().subscribe(data=>{
      this.skills=data;
    })
  }

  buildsignupForm(){
    this.signupForm = this.formbuilder.group({
      skill:['',[
        Validators.required
      ]],
      selfRating:['',[
        Validators.required,
        Validators.max(10)]],
        yearsOfExperience: ['', [
        Validators.required]],
    })
  }
  get skill() {
    return this.signupForm.get('skill');
  }
  get selfRating() {
    return this.signupForm.get('selfRating');
  }
  get yearsOfExperience() {
    return this.signupForm.get('yearsOfExperience');
  }

  addSkill(skillForm:any){
    let mentorSkill:Mentor_Skill={mentor:this.skillService.mentor,selfRating:skillForm['selfRating'],yearsOfExperience:skillForm['yearsOfExperience'],
                                    skill:this.skills.find(skill=>skill.name == skillForm["skill"])}
    this.skillService.addNewMentorSkill(mentorSkill).subscribe(data=>{
      this.buildsignupForm();
    })

  }
}
