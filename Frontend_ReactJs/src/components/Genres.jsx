import { React,useContext } from 'react'
import { SearchGenreContext } from '../context/SearchContext'

export const Genres = () => {

  const { searchGenre } = useContext(SearchGenreContext);
  const { fetchData } = useContext(SearchGenreContext);

  const filteredBooks = fetchData.filter((book) => {
    if (searchGenre === '')
      return true
    return book.genre.includes(searchGenre);
  });
  return (
    <div className="container-fluid back">
      <h2 className='text-white'>Genres : {searchGenre}</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        {filteredBooks.map((book) => (
          <div key={book.id} className="col-sm-12">
            <div className="card text-center h-100 bg-transparent bg-gradient border-0" style={{ width: '18rem' }}>
              <img src={'https://picsum.photos/200/300?random='+book.id} alt={book.title} className="card-img-top mx-auto d-block" style={{ width: '50%', height: 'auto' }} />
              <div className="card-body text-start cardback rounded">
                <h3 className="card-title text-center text-primary fw-bold">{book.title}</h3>
                <span className="card-text text-white-50 spanprop">Author - {book.author}</span>
                <span className="card-text text-success spanprop">Year   - {book.publication_year}</span>
                <span className="card-text text-warning spanprop">Genre  - {book.genre}</span>
                <span className="card-text text-info spanprop">About   - {book.description}</span>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" style={{ marginRight: '1%', width: '48%' }}>Preview</button>
                <button className="btn btn-warning" style={{ width: '48%' }}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
