import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Listings = ({ match }) => {
  const [listings, setListings] = useState([]);
  const { search } = match.params;

  useEffect(() => {
    axios
      .get(`/listings`)
      .then((response) => setListings(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Listings</h1>
      {listings.map((listing) => {
        return (
          <div key={listing._id}>
            <h3>{listing.title}</h3>
            <p>{listing.address}</p>
            <p>{listing.description}</p>
            <p>{listing.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Listings;
