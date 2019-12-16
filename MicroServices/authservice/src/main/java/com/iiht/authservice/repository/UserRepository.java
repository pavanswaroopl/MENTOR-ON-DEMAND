package com.iiht.authservice.repository;

import java.util.List;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.iiht.authservice.model.User;


public interface UserRepository extends CrudRepository<User, Integer> {


    User findByUserName(String userid);    
    @Query("From User")
	List<User> getUser();
                                                       

}
