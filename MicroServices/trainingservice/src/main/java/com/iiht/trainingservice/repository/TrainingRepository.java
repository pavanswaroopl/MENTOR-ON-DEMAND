package com.iiht.trainingservice.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import com.iiht.trainingservice.model.Mentors;
import com.iiht.trainingservice.model.Training;
import com.iiht.trainingservice.model.User;

public interface TrainingRepository extends JpaRepository<Training, Long> {

	List<Training> findAllByMentor(Mentors mentor);

	List<Training> findAllByUser(User user);

}
