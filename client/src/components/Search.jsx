import React, { useContext, useState } from 'react';
// import Calendar from './Calendar';
import { AppContext } from '../context/AppContext';
// import Dropdown from './Dropdown';
import { useHistory } from 'react-router-dom';

const Search = (props) => {
  const { setSearch, handleSearch } = useContext(AppContext);
  const [formData, setFormData] = useState({ month: '' });

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const history = useHistory();

  const items = [
    {
      id: 1,
      value: 'January'
    },
    {
      id: 2,
      value: 'February'
    },
    {
      id: 3,
      value: 'March'
    },
    {
      id: 4,
      value: 'April'
    },
    {
      id: 5,
      value: 'May'
    },
    {
      id: 6,
      value: 'June'
    },
    {
      id: 7,
      value: 'July'
    },
    {
      id: 8,
      value: 'August'
    },
    {
      id: 9,
      value: 'September'
    },
    {
      id: 10,
      value: 'October'
    },
    {
      id: 11,
      value: 'November'
    },
    {
      id: 12,
      value: 'December'
    },
    {
      id: 13,
      value: 'Not sure yet'
    }
  ];

  const months = [];
  items !== null &&
    items.forEach((item) => {
      months.push(item.value);
    });
  const filteredMonth = months.map((month, i) => {
    return (
      <option key={i} value={month}>
        {month}
      </option>
    );
  });

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e, history)}>
        <input
          type="text"
          className="input"
          placeholder="Search by City"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="container"></div>
        <select className="github-filter" onChange={handleChange}>
          <option>Choose Month</option>
          {filteredMonth}
        </select>
        <input type="date" placeholder="End Date" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
