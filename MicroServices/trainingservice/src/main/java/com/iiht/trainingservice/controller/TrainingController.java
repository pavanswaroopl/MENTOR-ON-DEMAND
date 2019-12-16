package com.iiht.trainingservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iiht.trainingservice.exception.EndDateCoincideException;
import com.iiht.trainingservice.exception.MentorSkillAlreadyExistsException;
import com.iiht.trainingservice.exception.StartDateCoincideException;
import com.iiht.trainingservice.model.Skill;
import com.iiht.trainingservice.model.Training;
import com.iiht.trainingservice.service.TrainingService;

@RestController
public class TrainingController {

	@Autowired
	private TrainingService trainingService;
	
	@PostMapping("/requestTraining")
	public void addTrainingRequest(@RequestBody @Valid Training training) throws StartDateCoincideException, EndDateCoincideException {
		trainingService.addTrainingRequest(training);
	}
	@GetMapping("/getIncompleteTraining/{userName}")
	public List<Training> getIncompleteTraining(@PathVariable String userName) {
		return trainingService.getIncompleteTraining(userName);
	}
	
	@PostMapping("/editStatus")
	public void editStatus(@RequestBody @Valid Training training){
		trainingService.editStatus(training);
	}
	
	@PostMapping("/addSkillLogin/{userName}/{yearsExperience}/{selfRating}")
	public void addSkillLogin(@RequestBody @Valid Skill skill, @PathVariable String userName, @PathVariable float yearsExperience, @PathVariable float selfRating) throws MentorSkillAlreadyExistsException{
		trainingService.addSkillLogin(skill,userName,yearsExperience,selfRating);
	}

}
