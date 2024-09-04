package com.bookStoreManagement.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookStoreManagement.entity.UserBooks;

public interface UserBooksRepository extends JpaRepository<UserBooks, Long> {
	  List<UserBooks> findByUserEmail(String email);
	}
