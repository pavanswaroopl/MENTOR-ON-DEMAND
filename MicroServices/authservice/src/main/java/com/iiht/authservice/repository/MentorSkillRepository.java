package com.iiht.authservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iiht.authservice.model.MentorSkills;
import com.iiht.authservice.model.Mentors;

public interface MentorSkillRepository extends JpaRepository<MentorSkills, Long> {
	
	List<MentorSkills> findAllByMentor(Mentors mentor);
}
