package com.bookStoreManagement.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookStoreManagement.entity.Books;

public interface BooksRepository  extends JpaRepository<Books, Integer>{
      
}
