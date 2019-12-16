package com.iiht.trainingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iiht.trainingservice.model.Mentors;
import com.iiht.trainingservice.model.User;

public interface MentorRepository extends JpaRepository<Mentors, Long> {

	Mentors findByUser(User user);

}
