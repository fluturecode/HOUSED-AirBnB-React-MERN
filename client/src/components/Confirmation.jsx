import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default () => {
  const { booking } = useContext(AppContext);

  if (!booking) return null;

  return (
    <h2>
      {' '}
      Thanks for requesting more information your booking -{' '}
      {booking.listing_id.title}{' '}
    </h2>
  );
};
