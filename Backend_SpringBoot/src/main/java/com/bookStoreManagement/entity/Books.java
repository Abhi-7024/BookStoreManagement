package com.bookStoreManagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table
@Entity
public class Books {

	@Id
	private int id;
	private String title;
	private String author;
	private int publication_year;
	private String genre;
	private String description;
	private String cover_image;

	public Books() {
		super();
	}

	public Books(int id, String title, String author, int publication_year, String genre, String description,
			String cover_image) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.publication_year = publication_year;
		this.genre = genre;
		this.description = description;
		this.cover_image = cover_image;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getPublication_year() {
		return publication_year;
	}

	public void setPublication_year(int publication_year) {
		this.publication_year = publication_year;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCover_image() {
		return cover_image;
	}

	public void setCover_image(String cover_image) {
		this.cover_image = cover_image;
	}

	@Override
	public String toString() {
		return "Books [id=" + id + ", title=" + title + ", author=" + author + ", publication_year=" + publication_year
				+ ", genre=" + genre + ", description=" + description + ", cover_image=" + cover_image + "]";
	}

}
