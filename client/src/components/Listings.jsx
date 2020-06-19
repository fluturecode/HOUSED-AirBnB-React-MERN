import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Search from './Search';
import { useHistory } from 'react-router-dom';

const Listings = () => {
  const { listings } = useContext(AppContext);
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/listings/${id}`);
  };

  return (
    <div>
      <Search />
      <h1>Listings</h1>
      {listings && listings.length > 0 ? (
        listings.map((listing) => {
          return (
            <div key={listing._id} onClick={() => handleClick(listing._id)}>
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
