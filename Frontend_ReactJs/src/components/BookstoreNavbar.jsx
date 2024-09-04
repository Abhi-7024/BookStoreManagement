import { React, useContext, useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form, Button, InputGroup, FormControl, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './BookstoreNavbar.css';
import { SearchGenreContext } from '../context/SearchContext';

export const BookstoreNavbar = () => {
  const { setSearchGenre } = useContext(SearchGenreContext);
  const { setSearchQuery } = useContext(SearchGenreContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQueryState, setSearchQueryState] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery(searchQueryState);
    navigate('/');
    setSearchQueryState('');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand className="brand text-light font-weight-bold h1">
          <span class="text-warning">Bookish</span>
          <span class="text-success">Delights</span>
          <span class="text-secondary" style={{ fontSize: '1.2rem' }}> BookStore</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => setSearchQuery('')}>
              Home
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <NavDropdown title="Genres" id="navbarDropdown">
              <NavDropdown.Item
                as={Link}
                to="/genres"
                style={{ backgroundColor: '#343a40', color: '#fff' }}
                onClick={() => setSearchGenre('Classic')}
              >
                Classic
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/genres"
                style={{ backgroundColor: '#343a40', color: '#fff' }}
                onClick={() => setSearchGenre('Adventure')}
              >
                Adventure
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/genres"
                style={{ backgroundColor: '#343a40', color: '#fff' }}
                onClick={() => setSearchGenre('Comedy')}
              >
                Comedy
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/genres"
                style={{ backgroundColor: '#343a40', color: '#fff' }}
                onClick={() => setSearchGenre('Romance')}
              >
                Romance
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/genres"
                style={{ backgroundColor: '#343a40', color: '#fff' }}
                onClick={() => setSearchGenre('Fantasy')}
              >
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/genres"
                style={{ backgroundColor: '#343a40', color: '#fff' }}
                onClick={() => setSearchGenre('Fiction')}
              >
                Fiction
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/genres"
                style={{ backgroundColor: '#343a40', color: '#fff' }}
                onClick={() => setSearchGenre('Dystopian')}
              >
                Dystopian
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/genres"
                style={{ backgroundColor: '#343a40', color: '#fff' }}
                onClick={() => setSearchGenre('Science Fiction')}
              >
                Science Fiction
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/genres"
                style={{ backgroundColor: '#343a40', color: '#fff' }}
                onClick={() => setSearchGenre('Philosophical')}
              >
                Philosophical
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <InputGroup>
              <FormControl
                type="search"
                name="search"
                placeholder="Search by title or author"
                aria-label="Search"
                value={searchQueryState}
                onChange={(e) => setSearchQueryState(e.target.value)}
                style={{ boxShadow: 'none' }}
              />
              <Button variant=" btn-success" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};