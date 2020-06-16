import React from 'react';
import '../styles/footer.css';

export const Footer = () => {
    return (
        
  <div class='wrapper'>

      
      <div class='col-1'>
        <h3>Community</h3>
        <ul class="list-layout">
          <li class="link-contrast">About</li>
          <li class="link-contrast">Photo Gallery</li>
        </ul>
      </div>

      <div class='col-1'>
        <h3>Safety</h3>
        <ul class="list-layout">
          <li class="link-contrast">Trust &amp; Basics</li>
          <li class="link-contrast">Tips</li>
        </ul>
      </div>

      <div class='col-1'>
        <h3>Help and Support</h3>
        <ul class="list-layout">
          <li class="link-contrast">Contact Us</li>
          <li class="link-contrast">Cancellation</li>
          <li class="link-contrast">Terms and Policies</li>
        </ul>
      </div>
    </div>
    )
}

export default Footer;