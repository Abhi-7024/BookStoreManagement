import React, { useEffect, useState, useContext } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { SearchGenreContext } from '../context/SearchContext';

export const Dashboard = () => {
    const [books, setBooks] = useState({});
    const [selectedBook, setSelectedBook] = useState(null);
    const { fetchData } = useContext(SearchGenreContext);

    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        navigate('/login');
    };

    const viewBook = (title) => {
        const selectedBook = fetchData.find((book) => book.title.toLowerCase() === title.toLowerCase());
        setSelectedBook(selectedBook);
    };

    const fetchUser = async () => {
        try {
            const response = await fetch(`http://localhost:8083/email/${email}`);
            const fetchedData = await response.json();
            setBooks(fetchedData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="container-fluid" style={{ minHeight: '100vh' }}>
            <div className="row">
                <div
                    className="col-md-2 sidebar"
                    style={{
                        backgroundColor: '#212529',
                        minHeight: '100vh',
                        padding: '20px',
                        color: '#fff',
                    }}
                >
                    <h2 className="text-center mb-4">Menu</h2>
                    <ul className="nav flex-column ">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link active text-light">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-light" onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <h1
                        className="text-center mb-4"
                        style={{ marginTop: '60px', color: 'black', fontSize: '36px' }}
                    >
                        Welcome, {name}!
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div
                                className="card shadow-lg"
                                style={{
                                    backgroundColor: '#343a40',
                                    borderColor: '#444',
                                    color: '#fff',
                                    borderRadius: '10px',
                                }}
                            >
                                <div className="card-body">
                                    <h2 className="card-title">Your Books:</h2>
                                    <ul className="list-group list-group-flush">
                                        {Object.keys(books).map((id) => (
                                            <li key={id} className="list-group-item">
                                                <h4>{books[id]}</h4>
                                                <button
                                                    className="btn btn-sm btn-primary"
                                                    onClick={() => viewBook(books[id])}
                                                >
                                                    View
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {selectedBook && (
                        <div className="container-fluid mt-5">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                                <div className="col-sm-12">
                                    <div
                                        className="card text-center h-100 bg-transparent border-0"
                                        style={{ width: '18rem', borderRadius: '10px' }}
                                    >
                                        <img
                                            src={'https://picsum.photos/200/300?random=' + selectedBook.id}
                                            alt={selectedBook.title}
                                            className="card-img-top mx-auto d-block"
                                            style={{ width: '50%', height: 'auto', borderRadius: '10px' }}
                                        />
                                        <div
                                            className="card-body text-start"
                                            style={{ backgroundColor: '#343a40', color: '#fff' }}
                                        >
                                            <h2 className="card-title text-center text-primary fw-bold">
                                                {selectedBook.title}
                                            </h2>
                                            <p className="card-text text-white-50">
                                                Author - {selectedBook.author}
                                            </p>
                                            <p className="card-text text-success">
                                                Year - {selectedBook.publication_year}
                                            </p>
                                            <p className="card-text text-warning">
                                                Genre - {selectedBook.genre}
                                            </p>
                                            <p className="card-text text-info">
                                                About - {selectedBook.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}