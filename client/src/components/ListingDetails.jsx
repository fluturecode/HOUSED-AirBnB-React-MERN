import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ListingDetails = () => {
  const [listing, setListing] = useState('');
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`/api/listings/${id}`).then(({ data }) => setListing(data));
  }, []);

  return (
    <div>
      <h1>{listing.title}</h1>
    </div>
  );
};

export default ListingDetails;
