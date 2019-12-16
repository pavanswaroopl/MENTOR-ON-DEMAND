package com.iiht.searchservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iiht.searchservice.model.MentorSkills;
import com.iiht.searchservice.model.Skill;

public interface SearchRepository extends JpaRepository<MentorSkills, Long> {
	
	List<MentorSkills> findAllBySkill(Skill skill);

}
