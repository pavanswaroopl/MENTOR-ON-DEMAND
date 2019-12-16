package com.iiht.trainingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iiht.trainingservice.model.Skill;



public interface SkillRepository extends JpaRepository<Skill, Long> {

}
