// src/components/SearchBar.jsx
import React, { useState, useRef, useEffect } from 'react';
import debounce from '../utils/debounce';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  const handleSearch = debounce((value) => {
    const results = onSearch(value);
    setSearchResults(results || []); // Ensure results is an array
    setShowResults(!!value);
  }, 1000);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative mx-auto max-w-2xl ">
      <div className="relative ">
        <input
          type="text"
          className="w-full rounded-lg border-2  bg-gray-100 px-6 py-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-blue-200"
          placeholder="Search our users..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value);
          }}
        />
         <i className="fas fa-search absolute right-6 top-1/2 -translate-y-1/2 text-gray-400"></i>
      </div>
      {showResults && searchTerm && (
        <div className="absolute mt-2 w-full rounded-lg bg-white py-2 shadow-xl">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="cursor-pointer px-6 py-2 hover:bg-gray-50"
            >
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;