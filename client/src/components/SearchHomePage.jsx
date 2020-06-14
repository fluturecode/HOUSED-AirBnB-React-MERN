import React, { useState } from 'react';
import axios from 'axios';

const Search = (props) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    props.history.push(`/listings/${search}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="input"
          placeholder="Search by City"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="text" placeholder="Date" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
