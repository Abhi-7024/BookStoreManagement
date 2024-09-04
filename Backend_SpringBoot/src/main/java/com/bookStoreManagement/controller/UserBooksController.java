package com.bookStoreManagement.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bookStoreManagement.entity.AddBookRequest;
import com.bookStoreManagement.entity.UserBooks;
import com.bookStoreManagement.service.UserBooksService;

@RestController
@CrossOrigin(origins = "*")
public class UserBooksController {

	@Autowired
	private UserBooksService userBookService; 

	@GetMapping("/email/{email}")
	public Map<Long, String> getUserBooksByEmail(@PathVariable String email) {
		Map<Long, String> userBooks = userBookService.getUserBooksByEmail(email);
		return userBooks;
	}

	@PostMapping("/addBook")
	public UserBooks addBook(@RequestBody AddBookRequest request) {
		return userBookService.addBookForUser(request.getEmail(), request.getTitle());
	}

}
