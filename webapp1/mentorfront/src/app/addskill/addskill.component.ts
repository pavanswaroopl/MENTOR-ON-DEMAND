import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillService } from '../services/skill.service';
import { TrainingService } from '../services/training.service';
import { UserService } from '../services/user.service';
import { skill } from '../services/skill';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {
  skillForm: FormGroup;
  skillList: skill[] = [];
  errorMessage: string = null;

  constructor(private skillService:SkillService, private formBuild: FormBuilder, private trainingService:TrainingService, private authService:AuthService) { }

  ngOnInit() {
    
    this.errorMessage = null;
    this.buildSkillForm()
    this.skillList = [];
    this.skillService.getAllSkills().subscribe(
      (data) => {
        this.skillList = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  buildSkillForm() {
    this.skillForm = this.formBuild.group({
      skill: ['', [
        Validators.required
      ]],
      selfRating: ['', [
        Validators.required,
        Validators.max(10),
        Validators.min(0)
      ]],
      yearsExperience: ['', [
        Validators.required,
        Validators.min(0),
        // Validators.
      ]],
    })
  }
  get skill() {
    return this.skillForm.get('skill');
  }
  get selfRating() {
    return this.skillForm.get('selfRating');
  }
  get yearsExperience() {
    return this.skillForm.get('yearsExperience');
  }
  addSkill(formData:any) {
    let skill:skill = this.skillList.find(skill => skill.name == formData["skill"]);
    let yearsExperience:number = formData["yearsExperience"];
    let selfRating:number = formData["selfRating"];
    this.trainingService.addMentorSkillAfterLogin(skill,this.authService.userName,yearsExperience,selfRating).subscribe(
      (data) => {
        window.alert("Your details are submitted successfully");
        this.buildSkillForm();
      },
      (error) => {
        console.log(error);
        if (error.error.message == "This skill exists for this mentor") {
          this.errorMessage = "This skill exists for this mentor";
        }
      }
    );
  }

}
