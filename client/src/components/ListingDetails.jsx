import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import '../styles/listingdetails.css';

const ListingDetails = () => {
  const { setBooking } = useContext(AppContext);
  const [listing, setListing] = useState('');
  const { id } = useParams();
  const history = useHistory();

  const handleConfirm = async () => {
    const { data } = await axios.post(
      '/api/bookings',
      {
        listing_id: id
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    if (data) {
      setBooking(data);
      history.push('/confirmation');
    } else {
      alert('Oops something went wrong!');
    }
  };

  useEffect(() => {
    axios.get(`/api/listings/${id}`).then(({ data }) => setListing(data));
  }, []);

  return (
    <div className="single-listing">
      <div className="host-profile">
        <h1 className="title">{listing.title}</h1>
        <img className="host-img" src={listing.hostPicture} alt="listing" />

        <p className="host-info">{listing.aboutHost}</p>

        <p className="host-info">Age: {listing.hostAge}</p>

        <p className="host-info">Host's Name: {listing.firstName}</p>

        <p className="host-info">
          Location: {listing.city}, {listing.state}
        </p>
      </div>
      <img
        className="listing-images"
        src={listing.primaryImage}
        alt="listing"
      />
      <img className="listing-images" src={listing.secondImage} alt="listing" />
      <img className="listing-images" src={listing.thirdImage} alt="listing" />

      <button onClick={handleConfirm}>Request Info</button>
    </div>
  );
};

export default ListingDetails;
