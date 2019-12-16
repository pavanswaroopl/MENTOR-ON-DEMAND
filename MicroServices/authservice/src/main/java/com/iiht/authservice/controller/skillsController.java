package com.iiht.authservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iiht.authservice.model.Skill;
import com.iiht.authservice.service.skillservices;

@RestController
public class skillsController {

	@Autowired
	private skillservices skillservices;
	
	@GetMapping("/skills")
	public List<Skill> getallskills()
	{
		return skillservices.getallskills();
	}
}
