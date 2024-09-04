package com.bookStoreManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bookStoreManagement.entity.Books;
import com.bookStoreManagement.service.BooksService;

@RestController
@CrossOrigin(origins = "*")
public class BooksController {

	@Autowired
	BooksService booksService;

	@GetMapping("/books")
	public List<Books> getBooks() {
		return booksService.getBooks();
	}

	@PostMapping("/book")
	public Books saveBook(@RequestBody Books book) {
		return booksService.saveBook(book);
	}
	
	@PostMapping("/books")
	public List<Books> saveBooks(@RequestBody List<Books> books){
		return booksService.saveBooks(books);
	}

}
