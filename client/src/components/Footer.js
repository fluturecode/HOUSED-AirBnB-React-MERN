import React from 'react';
import '../styles/footer.css';

export const Footer = () => {
    return (
        
  <div className='wrapper'>

      
      <div className='col-1'>
        <h3>Community</h3>
        <ul className="list-layout">
          <li className="link-contrast">About</li>
          <li className="link-contrast">Photo Gallery</li>
        </ul>
      </div>

      <div className='col-1'>
        <h3>Safety</h3>
        <ul className="list-layout">
          <li className="link-contrast">Trust &amp; Basics</li>
          <li className="link-contrast">Tips</li>
        </ul>
      </div>

      <div className='col-1'>
        <h3>Help and Support</h3>
        <ul className="list-layout">
          <li className="link-contrast">Contact Us</li>
          <li className="link-contrast">Cancellation</li>
          <li className="link-contrast">Terms and Policies</li>
        </ul>
      </div>
    </div>
    )
}

export default Footer;