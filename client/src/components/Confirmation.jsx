import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/confirmation.css'

export default () => {
  
  const { user, listing, booking } = useContext(AppContext);

  if (!booking) return null;

  return (
    <div className="conf-main">
      <img src={require('../images/Image Verify Info.png')} alt="Celebration for reserving" />
      <h2 className="header"> Reservation Sent!</h2>
      Thanks for inquiring, {user.firstName}(Guest name!)!
    <p>  Your request for more information about the  <p className="host">{booking.listing_id.city}</p> is being sent to: <p className="host">{booking.listing_id.firstName}.</p> </p>
    
    
      <p>Thanks for requesting more information on your booking:</p> 
      <h4 className="header">{booking.listing_id.title}. </h4>
      <img src={booking.listing_id.images} alt="listing" />


      <h4 className="header"> What To Expect:</h4>
      <h6>
        Now that you have sent your request the host will get notified and be able to review
        your application and decide. The followings things should be kept in mind:
      </h6>
     
     <p>   1. Host will contact you first.</p>
     <p>  2. You and {booking.listing_id.firstName} (your host) will agree on the correct terms.</p>
     <p>  3. Always keep all records of the conversation.</p>
     <p>  4. Once the agreement has been reached we will send the final agreement for both Guest and Host to sign.</p>
     
   <h4 className="header"> Questions?</h4>

   <p> Any questions you may have about the process, please email: info@housed.com</p>

    </div>
  );
};
 