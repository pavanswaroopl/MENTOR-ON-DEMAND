package com.iiht.searchservice.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iiht.searchservice.model.MentorSkills;
import com.iiht.searchservice.model.Skill;
import com.iiht.searchservice.repository.SearchRepository;


@Service
public class SearchService {

	
	@Autowired
	private SearchRepository searchRepository;

	@Transactional
	public List<MentorSkills> searchBySkill(@Valid Skill skill) {
		return searchRepository.findAllBySkill(skill);
	}

	
}
