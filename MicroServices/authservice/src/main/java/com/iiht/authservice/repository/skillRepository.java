package com.iiht.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iiht.authservice.model.Skill;

public interface skillRepository extends JpaRepository<Skill, Long>{

}
