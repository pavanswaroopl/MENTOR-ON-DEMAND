package com.iiht.authservice.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iiht.authservice.model.Skill;
import com.iiht.authservice.repository.skillRepository;

@Service
public class skillservices {

	@Autowired
	private skillRepository skillRepository;
	
	@Transactional
	public List<Skill> getallskills()
	{
		return skillRepository.findAll();
	}
}
