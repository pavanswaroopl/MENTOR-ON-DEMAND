import { Component, OnInit } from '@angular/core';
import { Training } from '../services/training';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-mentorhome',
  templateUrl: './mentorhome.component.html',
  styleUrls: ['./mentorhome.component.css']
})
export class MentorhomeComponent implements OnInit {
  trainingList:any;

  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    this.getTrainingData();

  }

  getTrainingData() {
    this.trainingService.getIncompleteTrainingObservable().subscribe(
      (data)=>{
        this.trainingList = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  acceptRequest(training:Training) {
    training.status = "Accepted";
    this.trainingService.saveStatusChangedTraining(training).subscribe(
      (data)=>{
        window.alert("Successfully Approved !!");
        this.getTrainingData();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  declineRequest(training:Training){
    training.status = "Denied";
    this.trainingService.saveStatusChangedTraining(training).subscribe(
      (data)=>{
        window.alert("Denied Request !!");
        this.getTrainingData();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
