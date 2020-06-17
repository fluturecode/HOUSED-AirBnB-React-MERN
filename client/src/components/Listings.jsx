import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Listings = () => {
  const { listings } = useContext(AppContext);

  return (
    <div>
      <h1>Listings</h1>
      {listings && listings.length > 0 ? (
        listings.map((listing) => {
          console.log(listing);
          return (
            <div key={listing._id}>
              <h3>{listing.title}</h3>
              <p> {listing.firstName}</p>
              <p>{listing.address}</p>
              <p>{listing.city}</p>
              <p>{listing.state}</p>
              <p>{listing.zipCode}</p>
              <p>{listing.description}</p>
              <p>{listing.price}</p>
              <p>{listing.images}</p>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Listings;
