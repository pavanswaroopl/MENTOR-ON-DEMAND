package com.iiht.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iiht.authservice.model.Mentors;

public interface MentorRepository extends JpaRepository<Mentors, Long>{
	

//	Optional<Mentors> findBylinkedinUrl(String linkedinUrl);
	
//	Optional<Mentors> findBylinkedinUrl(String linkedinUrl);
	
	Mentors findBylinkedinUrl(String linkedinUrl);

}
