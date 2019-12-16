package com.iiht.authservice.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iiht.authservice.exception.LinkedinurlAlreadyexistsException;
import com.iiht.authservice.exception.MentorskillsAlreadyexistsException;
import com.iiht.authservice.model.MentorSkills;
import com.iiht.authservice.model.Mentors;
import com.iiht.authservice.service.MentorsService;

@RestController
@RequestMapping("/mentor")
public class mentorController {

	@Autowired
	private MentorsService mentorsservice;
	
	@PostMapping("/addmentorskills")
	public void addmentorskills(@RequestBody @Valid MentorSkills mentors) throws MentorskillsAlreadyexistsException
	{
		mentorsservice.addmentorskills(mentors);
	}
//	@GetMapping("/mentors")
//	public List<Mentors> getallmentors()
//	{return mentorsservic
//		
//	}
	
	@PostMapping("/addmentordetails")
	public void addmentordetails(@RequestBody @Valid Mentors mentors) throws LinkedinurlAlreadyexistsException
	{
		mentorsservice.addmentordetails(mentors);
	}
}
