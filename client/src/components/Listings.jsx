import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Search from './Search';
import { useHistory } from 'react-router-dom';
import '../styles/listings.css';

const Listings = () => {
  const { listings } = useContext(AppContext);
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/listings/${id}`);
  };

  return (
    <div className="singleListing">
      <Search />
      <h1>Listings</h1>
      {listings && listings.length > 0 ? (
        listings.map((listing) => {
          return (
            <div
              key={listing._id}
              onClick={() => handleClick(listing._id)}
              className="listingContainer"
            >
              <p className="listingTitle">{listing.title}</p>
              <span>{listing.city}</span>, <span>{listing.state}</span>
              <p>{listing.zipCode}</p>
              <p>{listing.homeDescription}</p>
              <p className="price">{listing.price}</p>
              <div className="imageContainer">
                <img
                  src={listing.primaryImage}
                  alt="listing"
                  className="singleListingImage"
                />
              </div>
              <p className="show-more">show more</p>
              <p className="border-box"> </p>
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
