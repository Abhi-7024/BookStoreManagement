package com.bookStoreManagement.service;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookStoreManagement.entity.UserBooks;
import com.bookStoreManagement.entity.Users;
import com.bookStoreManagement.repo.UserBooksRepository;
import com.bookStoreManagement.repo.UserRepository;

@Service
public class UserBooksService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserBooksRepository userBookRepository;

	public Map<Long, String> getUserBooksByEmail(String email) {
		  Optional<Users> user = userRepository.findByEmail(email);
		  if (user.isPresent()) {
		    return userBookRepository.findByUserEmail(email).stream()
		      .collect(Collectors.toMap(UserBooks::getId, UserBooks::getTitle));
		  } else {
		    return Collections.emptyMap();
		  }
		}
	
	public UserBooks addBookForUser(String email, String title) {
        Optional<Users> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            Users user = userOptional.get();
            UserBooks userBook = new UserBooks();
            userBook.setTitle(title);
            userBook.setUser(user);
            return userBookRepository.save(userBook);
        } else {
            throw new RuntimeException("User not found with email: " + email);
        }
    }
}
