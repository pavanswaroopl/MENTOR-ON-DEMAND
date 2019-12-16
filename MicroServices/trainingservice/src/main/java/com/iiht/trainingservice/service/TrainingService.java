package com.iiht.trainingservice.service;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iiht.trainingservice.exception.EndDateCoincideException;
import com.iiht.trainingservice.exception.MentorSkillAlreadyExistsException;
import com.iiht.trainingservice.exception.StartDateCoincideException;
import com.iiht.trainingservice.model.MentorSkills;
import com.iiht.trainingservice.model.Mentors;
import com.iiht.trainingservice.model.Skill;
import com.iiht.trainingservice.model.Training;
import com.iiht.trainingservice.model.User;
import com.iiht.trainingservice.repository.MentorRepository;
import com.iiht.trainingservice.repository.MentorSkillRepository;
import com.iiht.trainingservice.repository.TrainingRepository;
import com.iiht.trainingservice.repository.UserRepository;

@Service
public class TrainingService {

	
	@Autowired
	private TrainingRepository trainingRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private MentorRepository mentorRepository;
	@Autowired
	private MentorSkillRepository mentorSkillRepository;
	
	public void addSkillLogin(@Valid Skill skill, String userName, float yearsExperience, float selfRating) throws MentorSkillAlreadyExistsException {
		User user = userRepository.findByUserName(userName).get();
		Mentors mentor = mentorRepository.findByUser(user);
		List<MentorSkills> mentorExistingSkills = mentorSkillRepository.findAllByMentor(mentor);
		for(MentorSkills mentorExistingSkill:mentorExistingSkills){
			if(mentorExistingSkill.getSkill().getName().matches(skill.getName())){
				throw new MentorSkillAlreadyExistsException("This skill exists for this mentor");
			}
		}
		MentorSkills mentorSkill = new MentorSkills();
		mentorSkill.setMentor(mentor);
		mentorSkill.setSelfRating(selfRating);
		mentorSkill.setYearsOfExperience(yearsExperience);
		mentorSkill.setSkill(skill);
		mentorSkillRepository.save(mentorSkill);
	}
	
	@Transactional
	public List<Training> getIncompleteTraining(String userName) {
		User user = userRepository.findByUserName(userName).get();
		Mentors mentor = mentorRepository.findByUser(user);
		List<Training> trainingList = trainingRepository.findAllByMentor(mentor);
		List<Training> pendingTrainingList = new ArrayList<Training>();
		for(Training training:trainingList){
			if(training.getStatus().equals("Request Pending")){
				pendingTrainingList.add(training);
			}
		}
		return pendingTrainingList;
	}

	public void addTrainingRequest(@Valid Training training) throws StartDateCoincideException, EndDateCoincideException {
		List<Training> trainingListMentor = trainingRepository.findAllByMentor(training.getMentor());
		List<Training> trainingListUser = trainingRepository.findAllByUser(training.getUser());
		for(Training existingTraining:trainingListMentor){
			if(existingTraining.getStatus().equals("Approved")){
				if(training.getStartDate().after(existingTraining.getStartDate()) || training.getStartDate().equals(existingTraining.getStartDate())){
					if(training.getStartDate().before(existingTraining.getEndDate()) || training.getStartDate().equals(existingTraining.getEndDate())){
						throw new StartDateCoincideException("Start Date Coincides with an existing approved training of Mentor");
					}
				}
				else if(training.getEndDate().after(existingTraining.getStartDate()) || training.getEndDate().equals(existingTraining.getStartDate())){
					if(training.getEndDate().before(existingTraining.getEndDate()) || training.getEndDate().equals(existingTraining.getEndDate())){
						throw new EndDateCoincideException("End Date Coincides with an existing approved training of Mentor");
					}
				}
			}
		}
		for(Training existingTraining:trainingListUser){
			if(existingTraining.getStatus().equals("Approved")){
				if(training.getStartDate().after(existingTraining.getStartDate()) || training.getStartDate().equals(existingTraining.getStartDate())){
					if(training.getStartDate().before(existingTraining.getEndDate()) || training.getStartDate().equals(existingTraining.getEndDate())){
						throw new StartDateCoincideException("Start Date Coincides with an existing approved training of User");
					}
				}
				else if(training.getEndDate().after(existingTraining.getStartDate()) || training.getEndDate().equals(existingTraining.getStartDate())){
					if(training.getEndDate().before(existingTraining.getEndDate()) || training.getEndDate().equals(existingTraining.getEndDate())){
						throw new EndDateCoincideException("End Date Coincides with an existing approved training of User");
					}
				}
			}
		}
		trainingRepository.save(training);
	}
	public void editStatus(@Valid Training training) {
		trainingRepository.save(training);
	}
	
}
