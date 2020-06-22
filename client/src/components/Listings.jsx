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
      <div className="search-bar"></div>
      {listings && listings.length > 0 ? (
        listings.map((listing) => {
          return (
            <div
              key={listing._id}
              onClick={() => handleClick(listing._id)}
              className="listingContainer"
            >
              <div className="text">
                <p className="listingTitle">{listing.title}</p>
                <p>
                  {listing.city}, {listing.state} {listing.zipCode}
                </p>

                <p>{listing.homeDescription}</p>
                <p className="price">{listing.price}</p>
                <div className="imageContainer">
                  <span>
                    <img
                      src={listing.primaryImage}
                      alt="listing"
                      className="singleListingImage"
                    />
                  </span>
                  <p className="show-more">Click image for more info</p>
                </div>
              </div>
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
