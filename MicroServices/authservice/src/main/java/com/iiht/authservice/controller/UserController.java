package com.iiht.authservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iiht.authservice.exception.UserAlreadyExistsException;
import com.iiht.authservice.model.User;
import com.iiht.authservice.repository.UserRepository;
import com.iiht.authservice.service.AppUserDetailsService;

@RestController

@RequestMapping("/users")
public class UserController {

	@Autowired
	private AppUserDetailsService appuserdetailsservice;
	@Autowired
	private UserRepository userRepository;
	@GetMapping
	public List<User> getUsers() {

		return (userRepository.getUser());

	}
	@GetMapping("/{userName}")
	public User getUser(@PathVariable String userName) {
		return userRepository.findByUserName(userName);
	}
	@PostMapping
	public void signup(@RequestBody @Valid User user) throws UserAlreadyExistsException
	{

			appuserdetailsservice.signup(user);
		
	}
	
	
	
	

}
