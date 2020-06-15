import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Listings = () => {
  const { search } = useParams();

  useEffect(() => {
    axios
      .get(`/listings`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Listings</h1>
    </div>
  );
};

export default Listings;
