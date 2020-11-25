import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/confirmation.css';

export default () => {
  const { user, booking } = useContext(AppContext);

  if (!booking) return null;

  return (
    <div className="conf-main">
      <img
        src={require('../images/Image Verify Info.png')}
        alt="Celebration for reserving"
      />
      <h2 className="header"> Reservation Sent!</h2>
      Thanks for your inquiry {user.firstName}
      <div>
        {' '}
        Your request for more information about the home in{' '}
        <p className="host">{booking.listing_id.city}</p> is being sent to:{' '}
        <p className="host">{booking.listing_id.firstName}</p>{' '}
      </div>
      <p>You requested information for:</p>
      <h4 className="header">{booking.listing_id.title}. </h4>
      <img
        className="conf-image"
        src={booking.listing_id.primaryImage}
        alt="listing"
      />
      <h4 className="header"> What To Expect:</h4>
      <h5>
        Now that you have sent your request The followings things should be kept
        in mind:
      </h5>
      <p> 1. Host will contact you first.</p>
      <p>
        {' '}
        2. You and {booking.listing_id.firstName} (your host) will agree on the
        correct terms.
      </p>
      <p> 3. Always keep all records of the conversation.</p>
      <p>
        {' '}
        4. Once the agreement has been reached we will send the final agreement
        for both Guest and Host to sign.
      </p>
      <h4 className="header"> Questions?</h4>
      <p> For any questions or concerns please email: info@housed.com</p>
    </div>
  );
};
