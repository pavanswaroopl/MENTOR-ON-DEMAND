package com.iiht.trainingservice.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import com.iiht.trainingservice.model.MentorSkills;
import com.iiht.trainingservice.model.Mentors;

public interface MentorSkillRepository extends JpaRepository<MentorSkills, Long> {

	List<MentorSkills> findAllByMentor(Mentors mentor);
	

}
