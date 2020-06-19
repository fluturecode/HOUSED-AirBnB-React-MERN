import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

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
      alert('Opps something went wrong');
    }
  };

  useEffect(() => {
    axios.get(`/api/listings/${id}`).then(({ data }) => setListing(data));
  }, []);

  return (
    <div>
      <h1>{listing.title}</h1>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default ListingDetails;
