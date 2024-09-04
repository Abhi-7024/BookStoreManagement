package com.bookStoreManagement.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bookStoreManagement.entity.Users;
import com.bookStoreManagement.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserLoginController {

	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public int registerUser(@RequestBody Users user) {
		userService.registerUser(user);
		return 1;
	}

	@GetMapping("/users")
	public List<Users> getRegisteredUsers() {
		return userService.getRegisterUser();
	}

	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> loginUser(@RequestBody Users loginRequest) {
		return userService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
	}

}
