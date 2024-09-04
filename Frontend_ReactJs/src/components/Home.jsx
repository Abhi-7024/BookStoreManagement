import { React, useEffect, useState, useContext } from 'react';
import { SearchGenreContext } from '../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Home = () => {
  const { searchQuery } = useContext(SearchGenreContext);
  const { setFetchData } = useContext(SearchGenreContext)
  const { fetchData } = useContext(SearchGenreContext);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setIsLoggedIn(true);
      setUserEmail(storedEmail);
    }
  }, []);

  const fetchBooks = async () => {
    let response = await fetch('http://localhost:8083/books');
    let fetchedData = await response.json();
    setFetchData(fetchedData);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    const filteredBooks = fetchData.filter((book) => {
      if (searchQuery !== '')
        return (
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return true;
    });
    setFilteredBooks(filteredBooks);
  }, [searchQuery]);

  const buyBook = async (book) => {
    if (isLoggedIn) {
      try {
        const response = await axios.post('http://localhost:8083/addBook', {
          email: userEmail,
          title: book.title,
        });
        console.log(response);
        alert('Book added successfully!');
        navigate('/dashboard')
      } catch (error) {
        console.error(error);
        alert('Failed to add book!');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="container-fluid back">
      {filteredBooks.length === 0 ? (
        <div className="no-data">No books found.</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {filteredBooks.map((book) => (
            <div key={book.id} className="col-sm-12">
              <div
                className="card text-center h-100 bg-transparent bg-gradient border-0"
                style={{ width: '18rem' }}
              >
                <img
                  src={'https://picsum.photos/200/300?random=' + book.id}
                  alt={book.title}
                  className="card-img-top mx-auto d-block"
                  style={{ width: '50%', height: 'auto' }}
                />
                <div className="card-body text-start cardback rounded">
                  <h3 className="card-title text-center text-primary fw-bold">
                    {book.title}
                  </h3>
                  <span className="card-text text-white-50 spanprop">
                    Author - {book.author}
                  </span>
                  <span className="card-text text-success spanprop">
                    Year - {book.publication_year}
                  </span>
                  <span className="card-text text-warning spanprop">
                    Genre - {book.genre}
                  </span>
                  <span className="card-text text-info spanprop">
                    About - {book.description}
                  </span>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary" style={{ marginRight: '1%', width: '48%' }}>
                    Preview
                  </button>
                  <button
                    className="btn btn-warning"
                    style={{ width: '48%' }}
                    onClick={() => buyBook(book)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};