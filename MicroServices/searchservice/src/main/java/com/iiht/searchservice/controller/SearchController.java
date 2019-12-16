package com.iiht.searchservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iiht.searchservice.model.MentorSkills;
import com.iiht.searchservice.model.Skill;
import com.iiht.searchservice.service.SearchService;


@RestController
public class SearchController {
	
	@Autowired
	private SearchService searchService;
	
	@PostMapping("/byskill")
	public List<MentorSkills> searchBySkill(@RequestBody @Valid Skill skill){
		return searchService.searchBySkill(skill);
	}

}
