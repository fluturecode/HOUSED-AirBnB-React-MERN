import React from 'react';
import '../styles/footer.css';

export const Footer = () => {
    return (
        <footer>
  <div class='wrapper'>
    <div class='seperator padded'>
      <div class='col-2'>
      </div>
      <div class='col-1 first'>
        <h3>Community</h3>
        <ul class="list-layout">
          <li><a href="/about/about-us" class="link-contrast">About</a></li>
          <li><a href="/careers" class="link-contrast">Photo Gallery</a></li>
        </ul>
      </div>
      <div class='col-1'>
        <h3>Safety</h3>
        <ul class="list-layout">
          <li><a href="/trust" class="link-contrast">Trust &amp; Basics</a></li>
          <li><a href="/invite?r=6" class="link-contrast">Tips</a></li>
        </ul>
      </div>
      <div class='col-1'>
        <h3>Help and Support</h3>
        <ul class="list-layout">
          <li><a href="/host" class="link-contrast">Contact Us</a></li>
          <li><a href="/hospitality" class="link-contrast">Cancellation</a></li>
          <li><a href="/help/responsible-hosting" class="link-contrast">Terms and Policies</a></li>
        </ul>
      </div>
    </div>
  
  </div>
</footer>
    )
}

export default Footer;