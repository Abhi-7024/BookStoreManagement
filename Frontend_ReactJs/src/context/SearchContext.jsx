import { createContext, useState } from "react";

export const SearchGenreContext = createContext();

export const SearchGenreProvider = ({ children }) => {
  const [searchGenre, setSearchGenre] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchData, setFetchData] = useState([]);

  return (
    <SearchGenreContext.Provider value={{ searchGenre, setSearchGenre, searchQuery, setSearchQuery, fetchData, setFetchData }}>
      {children}
    </SearchGenreContext.Provider>
  );
};