package com.iiht.authservice;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.iiht.authservice.exception.UserAlreadyExistsException;
import com.iiht.authservice.model.User;
import com.iiht.authservice.service.AppUserDetailsService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = AuthserviceApplication.class)
public class AuthserviceApplicationTests {

	 @Autowired              
	 AppUserDetailsService userservice;           
	 @Test           
	 public void testUserSignup() throws UserAlreadyExistsException {           
       User user =new User();
       user.setUserName("testUser");
       user.setPassword("pwd");
       user.setContactNumber(9100560867L);
       user.setFirstName("asdasd");
       user.setLastName("asd");
       user.setRole("user");
      assertEquals(userservice.signup(user),true);
       }                               
               
}

