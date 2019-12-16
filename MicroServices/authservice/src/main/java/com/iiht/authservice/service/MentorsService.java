package com.iiht.authservice.service;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iiht.authservice.exception.LinkedinurlAlreadyexistsException;
import com.iiht.authservice.model.MentorSkills;
import com.iiht.authservice.model.Mentors;
import com.iiht.authservice.model.User;
import com.iiht.authservice.repository.MentorRepository;
import com.iiht.authservice.repository.MentorSkillRepository;
import com.iiht.authservice.repository.UserRepository;

@Service
public class MentorsService {
	@Autowired
	private MentorRepository mentorrepository;
	
	@Autowired
	private UserRepository userrepository;
	
	@Autowired
	private MentorSkillRepository mentorskillsrepository;
	
	@Transactional
	public void addmentordetails(@Valid Mentors addmentors) throws LinkedinurlAlreadyexistsException {
		User user = userrepository.findByUserName(addmentors.getUser().getUserName());
		addmentors.setUser(user);
		if(mentorrepository.findBylinkedinUrl(addmentors.getLinkedinUrl()) != null){
			throw new LinkedinurlAlreadyexistsException();
		}
		mentorrepository.save(addmentors);
	}
	
	public void addmentorskills(@Valid MentorSkills mentorSkillsdetails){
		System.out.println("inside linkedin");
		Mentors mentor = mentorrepository.findBylinkedinUrl(mentorSkillsdetails.getMentor().getLinkedinUrl());
		System.out.println("inside");
	
		mentorSkillsdetails.setMentor(mentor);
//		List<MentorSkills> mentorskills = mentorskillsrepository.findAllByMentor(mentor);
//		for(MentorSkills mentorskill:mentorskills){
//			if(mentorskill.getSkill().getName().matches(mentorSkillsdetails.getSkill().getName())){
//				throw new MentorskillsAlreadyexistsException();
//			}
//		}
		mentorskillsrepository.save(mentorSkillsdetails);
	}

}
