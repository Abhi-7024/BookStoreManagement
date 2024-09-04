package com.bookStoreManagement.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bookStoreManagement.entity.Users;
import com.bookStoreManagement.repo.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public Users registerUser(Users user) {
    	 user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
    
    public List<Users>  getRegisterUser() {
        return userRepository.findAll();
    }
    
    public ResponseEntity<Map<String, Object>> loginUser(String email, String password) {
        Optional<Users> optionalUser = userRepository.findByEmail(email);
        if (!optionalUser.isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid email or password"));
        }
        Users user = optionalUser.get();
        if (user != null && passwordEncoder.matches(password, user.getPassword())) { 
        	return ResponseEntity.ok(Map.of("message", "You are now logged in!", "success", true,"name",user.getName()));
        }
        return ResponseEntity.badRequest().body(Map.of("message", "Invalid email or password"));
    }
}
