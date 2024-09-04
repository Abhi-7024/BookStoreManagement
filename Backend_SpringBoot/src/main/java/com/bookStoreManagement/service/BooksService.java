package com.bookStoreManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookStoreManagement.entity.Books;
import com.bookStoreManagement.repo.BooksRepository;

@Service
public class BooksService {

	@Autowired
	BooksRepository booksRepository;

	public List<Books> getBooks() {

		return booksRepository.findAll();
	}

	public Books saveBook(Books book) {
		book = booksRepository.save(book);
		return book;
	}
	
	public List<Books> saveBooks(List<Books> books) {
	    return booksRepository.saveAll(books);
	}
}
