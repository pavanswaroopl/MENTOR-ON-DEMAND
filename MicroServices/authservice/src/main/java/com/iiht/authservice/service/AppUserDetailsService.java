package com.iiht.authservice.service;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.iiht.authservice.exception.UserAlreadyExistsException;
import com.iiht.authservice.model.AppUser;
import com.iiht.authservice.model.User;
import com.iiht.authservice.repository.UserRepository;


@Service
public class AppUserDetailsService implements UserDetailsService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
		AppUser appUser;
		User user = userRepository.findByUserName(userId);
		if(user==null){
			throw new UsernameNotFoundException("User not found!");
		}
		else
		{
			LOGGER.info("user is:"+user);
			appUser = new AppUser(user);
			
		}
		return appUser;
		
	}
	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	public boolean signup(@Valid User newuser) throws UserAlreadyExistsException{
        User newUser=userRepository.findByUserName(newuser.getUserName());
        if(newUser!=null)
        {
        	throw new UserAlreadyExistsException("Username is already taken");
        }
        else
        {
            String password=newuser.getPassword();
            BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
            String newpassword=encoder.encode(password);
            
            newuser.setPassword(newpassword);
            userRepository.save(newuser);
            return true;
        }
    
   } 
	

}


