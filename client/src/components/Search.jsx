import React, { useState } from 'react';

const Search = (props) => {
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
