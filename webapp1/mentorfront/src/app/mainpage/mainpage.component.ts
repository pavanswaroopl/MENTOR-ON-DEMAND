import { Component, OnInit } from '@angular/core';
import { skill } from '../services/skill';
import { Mentor_Skill } from '../services/mentorskill';
import { SkillService } from '../services/skill.service';
import { MentorService } from '../services/mentor.service';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { TrainingService } from '../services/training.service';
import { Training } from '../services/training';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  
  skillList: skill[];
  skillSearchKey:string;
  mentorList:Mentor_Skill[];
  moreInfoMentorId:number = null;
  requestTrainingMentorId:number = null;
  requestTrainingForm:FormGroup;
  errorMessage:string=null;


  constructor(private skillService:SkillService, private mentorService:MentorService,private authService:AuthService,private userService:UserService,
    private formBuild: FormBuilder, private trainingService:TrainingService) { }

  ngOnInit() {
    this.moreInfoMentorId = null;
    this.skillSearchKey = null;
    this.skillList = [];
    this.skillService.getAllSkills().subscribe(
      (data)=>{
        this.skillList = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  searchBySkill() {
    let skill:skill = this.skillList.find(skill => skill.name == this.skillSearchKey)
    this.mentorService.findMentorBySkill(skill).subscribe(
      (data)=>{
        this.mentorList = data;   
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  moreDetails(mentorId:number) {
    this.moreInfoMentorId = mentorId;
  }
  requestTraining(mentorId:number) {
    this.userService.getCurrentUserFromDataBase();
    this.requestTrainingMentorId = mentorId;
    this.requestTrainingForm = this.formBuild.group({
      startDate: ['',[
        Validators.required,
        this.dateToday.bind(this),
        this.startAfterEnd.bind(this)
      ]],
      endDate: ['',[
        Validators.required,
        this.dateToday.bind(this),
        this.endBeforeStart.bind(this)
      ]]
    })
  }

  get startDate(){
    return this.requestTrainingForm.get('startDate');
  }

  get endDate(){
    return this.requestTrainingForm.get('endDate');
  }

  dateToday(formControl: FormControl): { [s: string]: boolean } {
    if (this.requestTrainingForm) {
      if (formControl.value){
        let date:Date = new Date(formControl.value);
        let currentDate = new Date();        
        if ( date < currentDate ) {
          return { 'nomatch': true };
        }
      }
    }
    return null;
  }
  
  endBeforeStart(formControl:FormControl): { [s: string]: boolean } {
    if (this.requestTrainingForm) {
      if (formControl.value){
        let endDate:Date = new Date(formControl.value);
        let startdate = new Date(this.requestTrainingForm.get('startDate').value);            
        if ( startdate > endDate ) {
          return { 'nomatch1': true };
        }
      }
    }
    return null;
  }
  
  startAfterEnd(formControl:FormControl): { [s: string]: boolean } {
    if (this.requestTrainingForm) {
      if (formControl.value){
        let startdate:Date = new Date(formControl.value);
        let endDate = new Date(this.requestTrainingForm.get('endDate').value);            
        if ( startdate > endDate ) {
          return { 'nomatch1': true };
        }
      }
    }
    return null;
  }
  
  submitRequestTraining(formData:any,mentorSkill:Mentor_Skill) {
    let trainingDetails:Training = {id:null,mentor:mentorSkill.mentor,endDate:formData["endDate"],progress:0,rating:null,
    skill:mentorSkill.skill,startDate:formData["startDate"],status:"Request Pending",user:this.userService.getCurrentUser()}
    this.trainingService.sendTrainingRequest(trainingDetails).subscribe(
      (data)=>{
        window.alert("Your details are submitted successfully");
      },
      (error)=>{
        console.log(error);
        if (error.error.message == "Start Date Coincides with an existing approved training of Mentor") {
          this.errorMessage = "Start Date Coincides with an existing approved training of Mentor";
        }
        else if (error.error.message == "End Date Coincides with an existing approved training of Mentor") {
          this.errorMessage = "End Date Coincides with an existing approved training of Mentor";
        }
        else if (error.error.message == "Start Date Coincides with an existing approved training of User") {
          this.errorMessage = "Start Date Coincides with an existing approved training of User";
        }
        else if (error.error.message == "End Date Coincides with an existing approved training of User") {
          this.errorMessage = "End Date Coincides with an existing approved training of User";
        }
      }
    )
  }
}
